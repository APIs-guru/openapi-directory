package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TypeBoulderEmployeeSalaries struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTypeBoulderEmployeeSalaries(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TypeBoulderEmployeeSalaries {
	return &TypeBoulderEmployeeSalaries{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// SearchBoulderEmployeeSalaries - Search API for 'Boulder Employee Salaries' entry type
// API to search for entries of type Boulder Employee Salaries
func (s *TypeBoulderEmployeeSalaries) SearchBoulderEmployeeSalaries(ctx context.Context, request operations.SearchBoulderEmployeeSalariesRequest) (*operations.SearchBoulderEmployeeSalariesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/repository/search/type/boulder_employee_salaries"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchBoulderEmployeeSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
