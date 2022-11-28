package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://containers-api.ng.bluemix.net/v3",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteContainersGroupsNameOrID - Stop and delete all container instances in a container group.
// Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
func (s *SDK) DeleteContainersGroupsNameOrID(ctx context.Context, request operations.DeleteContainersGroupsNameOrIDRequest) (*operations.DeleteContainersGroupsNameOrIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/groups/{name_or_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteContainersGroupsNameOrIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// DeleteContainersNameOrID - Remove a single container
// Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
func (s *SDK) DeleteContainersNameOrID(ctx context.Context, request operations.DeleteContainersNameOrIDRequest) (*operations.DeleteContainersNameOrIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteContainersNameOrIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// DeleteImagesID - Remove a Docker image.
// Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
func (s *SDK) DeleteImagesID(ctx context.Context, request operations.DeleteImagesIDRequest) (*operations.DeleteImagesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/images/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteImagesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// DeleteVolumesFsName - Delete a file share
// This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
//
//	Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint.
//
//	**Note:** To delete a file share you must have been granted organization developer rights.
func (s *SDK) DeleteVolumesFsName(ctx context.Context, request operations.DeleteVolumesFsNameRequest) (*operations.DeleteVolumesFsNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/volumes/fs/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteVolumesFsNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// DeleteVolumesName - Delete a volume
// Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost.
func (s *SDK) DeleteVolumesName(ctx context.Context, request operations.DeleteVolumesNameRequest) (*operations.DeleteVolumesNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/volumes/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteVolumesNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersFloatingIps - List available public IP addresses in a space
// This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
func (s *SDK) GetContainersFloatingIps(ctx context.Context, request operations.GetContainersFloatingIpsRequest) (*operations.GetContainersFloatingIpsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/floating-ips"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersFloatingIpsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FloatingIps = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersGroups - List all container groups in a space
// This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
func (s *SDK) GetContainersGroups(ctx context.Context, request operations.GetContainersGroupsRequest) (*operations.GetContainersGroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/groups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersGroupsGetListItems = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersGroupsNameOrID - Inspect a container group.
// This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
func (s *SDK) GetContainersGroupsNameOrID(ctx context.Context, request operations.GetContainersGroupsNameOrIDRequest) (*operations.GetContainersGroupsNameOrIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/groups/{name_or_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersGroupsNameOrIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersGroupsNameOrIDGetDetails = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersIDStatus - List the current state of a container.
// This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
func (s *SDK) GetContainersIDStatus(ctx context.Context, request operations.GetContainersIDStatusRequest) (*operations.GetContainersIDStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{id}/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersIDStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetContainerStatus = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersJSON - List single containers in a space.
// This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
func (s *SDK) GetContainersJSON(ctx context.Context, request operations.GetContainersJSONRequest) (*operations.GetContainersJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Containers = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersMessages - List messages for the user
// This endpoint retrieves all IBM Containers system messages for the user.
func (s *SDK) GetContainersMessages(ctx context.Context, request operations.GetContainersMessagesRequest) (*operations.GetContainersMessagesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/messages"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersMessagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetContainersMessages200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetContainersMessages200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersNameOrIDJSON - Inspect a single container
// This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
func (s *SDK) GetContainersNameOrIDJSON(ctx context.Context, request operations.GetContainersNameOrIDJSONRequest) (*operations.GetContainersNameOrIDJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersNameOrIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainerInfo = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersQuota - Retrieve organization and space specific quota
// Retrieve the quota that is assigned to the organization and space.
func (s *SDK) GetContainersQuota(ctx context.Context, request operations.GetContainersQuotaRequest) (*operations.GetContainersQuotaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/quota"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersQuotaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersQuotaInfo = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersUsage - List container sizes and quota limits
// This endpoint returns a list of available container sizes and the quota limit and usage for the space.
//
// - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
// - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space.
// - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit.
func (s *SDK) GetContainersUsage(ctx context.Context, request operations.GetContainersUsageRequest) (*operations.GetContainersUsageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/usage"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersUsageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersUsageInfo = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetContainersVersion - List latest API version
// This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
func (s *SDK) GetContainersVersion(ctx context.Context) (*operations.GetContainersVersionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/version"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetContainersVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersVersionGetInfo = out
		}
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetImagesJSON - List all Docker images that are available in your private Bluemix registry.
// This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
func (s *SDK) GetImagesJSON(ctx context.Context, request operations.GetImagesJSONRequest) (*operations.GetImagesJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/images/json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetImagesJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageInfo = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetImagesNameOrIDJSON - Inspect a Docker image in private Bluemix registry
// This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
func (s *SDK) GetImagesNameOrIDJSON(ctx context.Context, request operations.GetImagesNameOrIDJSONRequest) (*operations.GetImagesNameOrIDJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/images/{name_or_id}/json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetImagesNameOrIDJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ImageDetail
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ImageDetail = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetRegistryNamespaces - Retrieve the namespace of an organization.
// This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
func (s *SDK) GetRegistryNamespaces(ctx context.Context, request operations.GetRegistryNamespacesRequest) (*operations.GetRegistryNamespacesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/registry/namespaces"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRegistryNamespacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Namespace
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Namespace = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetRegistryNamespacesNamespace - Check the availability of a namespace
// This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization.
//
//	Consider the following rules when choosing a namespace for your organization:
//
// - Every organization can have one namespace at a time only
// - The namespace must be unique in Bluemix.
// - The namespace can be 4-30 characters long.
// - The namespace must start with at least one letter or number.
// - The namespace can only contain lowercase letters, numbers or underscores (_).
func (s *SDK) GetRegistryNamespacesNamespace(ctx context.Context, request operations.GetRegistryNamespacesNamespaceRequest) (*operations.GetRegistryNamespacesNamespaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registry/namespaces/{namespace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRegistryNamespacesNamespaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Namespace
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Namespace = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetTlskey - Retrieve the TLS Certificate
// This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
func (s *SDK) GetTlskey(ctx context.Context, request operations.GetTlskeyRequest) (*operations.GetTlskeyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tlskey"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTlskeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Certificate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Certificate = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetVolumesFsFlavorsJSON - List available file share sizes
// This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
func (s *SDK) GetVolumesFsFlavorsJSON(ctx context.Context, request operations.GetVolumesFsFlavorsJSONRequest) (*operations.GetVolumesFsFlavorsJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/volumes/fs/flavors/json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVolumesFsFlavorsJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []int64
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVolumesFsFlavorsJSON200ApplicationJSONIntegers = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetVolumesFsJSON - List available file shares in a space
// This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
func (s *SDK) GetVolumesFsJSON(ctx context.Context, request operations.GetVolumesFsJSONRequest) (*operations.GetVolumesFsJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/volumes/fs/json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVolumesFsJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Fileshare
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Fileshares = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetVolumesFsNameJSON - Inspect a file share
// This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
func (s *SDK) GetVolumesFsNameJSON(ctx context.Context, request operations.GetVolumesFsNameJSONRequest) (*operations.GetVolumesFsNameJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/volumes/fs/{name}/json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVolumesFsNameJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.GetFileshareDetails
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetFileshareDetails = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetVolumesJSON - List all volumes for a space
// This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
func (s *SDK) GetVolumesJSON(ctx context.Context, request operations.GetVolumesJSONRequest) (*operations.GetVolumesJSONResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/volumes/json"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVolumesJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Volumes = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetVolumesNameJSON - Retrieve detailed information about a volume.
// Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
func (s *SDK) GetVolumesNameJSON(ctx context.Context, request operations.GetVolumesNameJSONRequest) (*operations.GetVolumesNameJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/volumes/{name}/json", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVolumesNameJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Volume = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PatchContainersGroupsNameOrID - Update a container group.
// Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`).
//
// Note: You can run only one update at a time.
//
//	The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances.
func (s *SDK) PatchContainersGroupsNameOrID(ctx context.Context, request operations.PatchContainersGroupsNameOrIDRequest) (*operations.PatchContainersGroupsNameOrIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/groups/{name_or_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchContainersGroupsNameOrIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostBuild - Build a Docker image from a Dockerfile
// This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).
//
//	To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.
func (s *SDK) PostBuild(ctx context.Context, request operations.PostBuildRequest) (*operations.PostBuildResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/build"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostBuildResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersCreate - Create and start a single container
// This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app.
//
//	In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container.
//
//	To create a container with IBM Containers, you must at least define the image that the container is based on.
//
// - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
func (s *SDK) PostContainersCreate(ctx context.Context, request operations.PostContainersCreateRequest) (*operations.PostContainersCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/create"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainerID = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersFloatingIpsIPRelease - Release public IP address
// This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
func (s *SDK) PostContainersFloatingIpsIPRelease(ctx context.Context, request operations.PostContainersFloatingIpsIPReleaseRequest) (*operations.PostContainersFloatingIpsIPReleaseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/floating-ips/{ip}/release", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersFloatingIpsIPReleaseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersFloatingIpsRequest - Request a public IP address for a space
// This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
func (s *SDK) PostContainersFloatingIpsRequest(ctx context.Context, request operations.PostContainersFloatingIpsRequestRequest) (*operations.PostContainersFloatingIpsRequestResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/floating-ips/request"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersFloatingIpsRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PostContainersFloatingIpsRequest200ApplicationJSONString = &out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersGroups - Create and start a container group.
// This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
//
// To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
//
// - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
// - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
func (s *SDK) PostContainersGroups(ctx context.Context, request operations.PostContainersGroupsRequest) (*operations.PostContainersGroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/groups"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContainersGroupsPostCreatedInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersGroupsPostCreatedInfo = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersGroupsNameOrIDMaproute - Map a public route to a container group.
// If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
func (s *SDK) PostContainersGroupsNameOrIDMaproute(ctx context.Context, request operations.PostContainersGroupsNameOrIDMaprouteRequest) (*operations.PostContainersGroupsNameOrIDMaprouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/groups/{name_or_id}/maproute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersGroupsNameOrIDMaprouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContainersGroupsNameOrIDMaproutePostInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersGroupsNameOrIDMaproutePostInfo = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersGroupsNameOrIDUnmaproute - Unmap a public route from a container group
// This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet.
//
//	When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups.
func (s *SDK) PostContainersGroupsNameOrIDUnmaproute(ctx context.Context, request operations.PostContainersGroupsNameOrIDUnmaprouteRequest) (*operations.PostContainersGroupsNameOrIDUnmaprouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/groups/{name_or_id}/unmaproute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersGroupsNameOrIDUnmaprouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContainersGroupsNameOrIDMaproutePostInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContainersGroupsNameOrIDMaproutePostInfo = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDFloatingIpsIPBind - Bind a public IP address to a single container
// This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
func (s *SDK) PostContainersNameOrIDFloatingIpsIPBind(ctx context.Context, request operations.PostContainersNameOrIDFloatingIpsIPBindRequest) (*operations.PostContainersNameOrIDFloatingIpsIPBindResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/floating-ips/{ip}/bind", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDFloatingIpsIPBindResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDFloatingIpsIPUnbind - Unbind a public IP address from a container
// This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers.
func (s *SDK) PostContainersNameOrIDFloatingIpsIPUnbind(ctx context.Context, request operations.PostContainersNameOrIDFloatingIpsIPUnbindRequest) (*operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/floating-ips/{ip}/unbind", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDFloatingIpsIPUnbindResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDPause - Pause a single container
// Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
func (s *SDK) PostContainersNameOrIDPause(ctx context.Context, request operations.PostContainersNameOrIDPauseRequest) (*operations.PostContainersNameOrIDPauseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/pause", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDPauseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDRename - Rename a single container
// Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`).
func (s *SDK) PostContainersNameOrIDRename(ctx context.Context, request operations.PostContainersNameOrIDRenameRequest) (*operations.PostContainersNameOrIDRenameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/rename", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDRenameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDRestart - Restart a single container
// Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
func (s *SDK) PostContainersNameOrIDRestart(ctx context.Context, request operations.PostContainersNameOrIDRestartRequest) (*operations.PostContainersNameOrIDRestartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/restart", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDRestartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDStart - Start a single container
// Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
func (s *SDK) PostContainersNameOrIDStart(ctx context.Context, request operations.PostContainersNameOrIDStartRequest) (*operations.PostContainersNameOrIDStartResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/start", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDStartResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDStop - Stop a single container
// Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
func (s *SDK) PostContainersNameOrIDStop(ctx context.Context, request operations.PostContainersNameOrIDStopRequest) (*operations.PostContainersNameOrIDStopResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/stop", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDStopResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostContainersNameOrIDUnpause - Unpause a single container
// Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
func (s *SDK) PostContainersNameOrIDUnpause(ctx context.Context, request operations.PostContainersNameOrIDUnpauseRequest) (*operations.PostContainersNameOrIDUnpauseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/containers/{name_or_id}/unpause", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostContainersNameOrIDUnpauseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostVolumesCreate - Create a volume in a space
// This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS).
//
//	After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints.
//
//	Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
func (s *SDK) PostVolumesCreate(ctx context.Context, request operations.PostVolumesCreateRequest) (*operations.PostVolumesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/volumes/create"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostVolumesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Volume = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostVolumesFsCreate - Create a file share in a space
// This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`).
//
//	A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
//
//	As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost.
//
// The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
func (s *SDK) PostVolumesFsCreate(ctx context.Context, request operations.PostVolumesFsCreateRequest) (*operations.PostVolumesFsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/volumes/fs/create"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostVolumesFsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostVolumesName - Share a volume with another space
// This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
func (s *SDK) PostVolumesName(ctx context.Context, request operations.PostVolumesNameRequest) (*operations.PostVolumesNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/volumes/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostVolumesNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Volume = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PutContainersQuota - Update space quota
// This endpoint updates the quota that is allocated to a Bluemix space.
//
//	**Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
func (s *SDK) PutContainersQuota(ctx context.Context, request operations.PutContainersQuotaRequest) (*operations.PutContainersQuotaResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/containers/quota"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutContainersQuotaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PutRegistryNamespacesNamespace - Set a namespace for your private Bluemix registry.
// Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry.
//
//	The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization:
//
// - Every organization can have one namespace at a time only
// - The namespace must be unique in Bluemix.
// - The namespace can be 4-30 characters long.
// - The namespace must start with at least one letter or number.
// - The namespace can only contain lowercase letters, numbers or underscores (_).
func (s *SDK) PutRegistryNamespacesNamespace(ctx context.Context, request operations.PutRegistryNamespacesNamespaceRequest) (*operations.PutRegistryNamespacesNamespaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/registry/namespaces/{namespace}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRegistryNamespacesNamespaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Namespace
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Namespace = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 409:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PutTlskeyRefresh - Refresh the TLS Certificate
// This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
func (s *SDK) PutTlskeyRefresh(ctx context.Context, request operations.PutTlskeyRefreshRequest) (*operations.PutTlskeyRefreshResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tlskey/refresh"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTlskeyRefreshResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRefresh = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
