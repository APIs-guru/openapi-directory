package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Locations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLocations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Locations {
	return &Locations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetVersionLocationsFormat - Unpaginated geojson response
// <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
//
//	<pre><code>{
//	  type: "FeatureCollection",
//	  features: [
//	    {
//	      type: "Feature",
//	      properties: {
//	      id: 4474199,
//	      type: "Theft",
//	      occurred_at: 1428536937
//	    },
//	      geometry: {
//	      type: "Point",
//	      coordinates: [ -122.6244177, 45.5164386 ]
//	    }
//	  }
//	}
//
// </code></pre>
//
// <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
//
// <p><strong>Go forth and make maps!</strong></p>
func (s *Locations) GetVersionLocationsFormat(ctx context.Context, request operations.GetVersionLocationsFormatRequest) (*operations.GetVersionLocationsFormatResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/locations"

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

	res := &operations.GetVersionLocationsFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetVersionLocationsMarkersFormat - Unpaginated geojson response with simplestyled markers
// <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
//
// <p><strong>Go forth and make maps!</strong></p>
func (s *Locations) GetVersionLocationsMarkersFormat(ctx context.Context, request operations.GetVersionLocationsMarkersFormatRequest) (*operations.GetVersionLocationsMarkersFormatResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/locations/markers"

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

	res := &operations.GetVersionLocationsMarkersFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
