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

type Uploads struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUploads(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Uploads {
	return &Uploads{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ChunkedUpload - Chunked upload of data
// Send chunked data for an **Upload**.
func (s *Uploads) ChunkedUpload(ctx context.Context, request operations.ChunkedUploadRequest) (*operations.ChunkedUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/uploads/{uploadId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ChunkedUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// FetchUploadStatusByID - Retrieve Upload status
// Check the status of an **Upload** by ID.
func (s *Uploads) FetchUploadStatusByID(ctx context.Context, request operations.FetchUploadStatusByIDRequest) (*operations.FetchUploadStatusByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v4/uploads/{uploadId}/status", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchUploadStatusByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UploadStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UploadStatus = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// FetchUploadStatuses - Retrieve Upload statuses in batch
// Check the status of multiple **Uploads** (up to 100 per request).
func (s *Uploads) FetchUploadStatuses(ctx context.Context, request operations.FetchUploadStatusesRequest) (*operations.FetchUploadStatusesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/uploads/status/query"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchUploadStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UploadStatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UploadStatuses = out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostUpload - Initiate a new upload
// Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
// The following `contentTypes` may be uploaded:
//
//	  <details><summary>__image/vnd.climate.thermal.geotiff__</summary>
//
//	  Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
//
//	  The following metadata entries are required to be embedded in the geotiff:
//	    * acquisitionStartDate - ISO8601 date
//	    * acquisitionEndDate - ISO8601 date
//	    * isCalibrated - boolean
//
//	  The following metadata entries are optional:
//	    * sourceId - uuid referencing the asset in the partner's system
//	    * fieldId - uuid referencing a field in the Climate system
//	    * boundaryId - uuid referencing a boundary in the Climate system
//	    * brandId - uuid referencing a partner's branding in the Climate system
//	    * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
//
//	  Requires either imagery:write or platform scope.
//	</details>
//	<details><summary>__image/vnd.climate.ndvi.geotiff__</summary>
//
//	  Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
//
//	  The following metadata entries are required to be embedded in the geotiff:
//	    * acquisitionStartDate - ISO8601 date
//	    * acquisitionEndDate - ISO8601 date
//
//	  The following metadata entries are optional:
//	    * sourceId - uuid referencing the asset in the partner's system
//	    * fieldId - uuid referencing a field in the Climate system
//	    * boundaryId - uuid referencing a boundary in the Climate system
//	    * brandId - uuid referencing a partner's branding in the Climate system
//	    * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
//
//	  Requires either imagery:write or platform scope.
//	</details>
//	<details><summary> __image/vnd.climate.rgb.geotiff__</summary>
//
//	  Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.
//
//	  The following metadata entries are required to be embedded in the geotiff:
//	    * acquisitionStartDate - ISO8601 date
//	    * acquisitionEndDate - ISO8601 date
//	    * isCalibrated - boolean
//
//	  The following metadata entries are optional:
//	    * sourceId - uuid referencing the asset in the partner's system
//	    * fieldId - uuid referencing a field in the Climate system
//	    * boundaryId - uuid referencing a boundary in the Climate system
//	    * brandId - uuid referencing a partner's branding in the Climate system
//	    * reflectanceComputeMethod - either TOA or GROUND
//	    * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
//
//	  Requires either imagery:write or platform scope.
//	</details>
//	<details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>
//
//	  Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
//
//	  The following metadata entries are required to be embedded in the geotiff:
//	    * acquisitionStartDate - ISO8601 date
//	    * acquisitionEndDate - ISO8601 date
//	    * isCalibrated - boolean
//
//	  The following metadata entries are optional:
//	    * sourceId - uuid referencing the asset in the partner's system
//	    * fieldId - uuid referencing a field in the Climate system
//	    * boundaryId - uuid referencing a boundary in the Climate system
//	    * brandId - uuid referencing a partner's branding in the Climate system
//	    * reflectanceComputeMethod - either TOA or GROUND
//	    * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
//
//	  Requires either imagery:write or platform scope.
//	</details>
//	<details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>
//
//	  Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
//
//	  The following metadata entries are required to be embedded in the geotiff:
//	    * acquisitionStartDate - ISO8601 date
//	    * acquisitionEndDate - ISO8601 date
//	    * isCalibrated - boolean
//
//	  The following metadata entries are optional:
//	    * sourceId - uuid referencing the asset in the partner's system
//	    * fieldId - uuid referencing a field in the Climate system
//	    * boundaryId - uuid referencing a boundary in the Climate system
//	    * brandId - uuid referencing a partner's branding in the Climate system
//	    * reflectanceComputeMethod - either TOA or GROUND
//	    * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
//
//	  Requires either imagery:write or platform scope.
//	</details>
//	<details><summary> __application/vnd.climate.field.geojson__</summary>
//
//	  Allows for the upload of a valid geojson feature (https://tools.ietf.org/html/rfc7946#section-3.2).
//
//	  The feature must contain the following entry in the properties section:
//	    * fieldName
//
//	  Optionally, the feature may contain the following entries in the properties properties:
//	    * farmName - defaults to *default*
//	    * clientName - defaults to *default*
//
//	  Additionally, the type field of the geometry field must one of the following:
//	    * Polygon
//	    * MultiPolygon
//
//	  The coordinates field of the geometry field must contain no more than 10,000 points.
//	  The total area of the field may not be larger than 20,000 acres in size.
//
//	  Requires either fields:write or platform scope.
//	</details>
//	<details><summary> __application/vnd.climate.rx.planting.shp__</summary>
//
//	  Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
//	    * .shp
//	    * .shx
//	    * .dbf
//
//	  All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
//
//	  Requires either rx:write or platform scope.
//	</details>
//	<details><summary> __application/vnd.climate.modus.xml__</summary>
//
//	  Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.
//
//	  The following elements are required to be present in the modus file.
//	    * EventCode - Max length of 64 bytes
//	    * EventDate - Must be in ISO8601
//	    * SoilSample - Has a maxOccurs of 20k
//	    * Depth - Has a maxOccurs of 50
//	    * LabName - Must be non-empty.
//	    * StartingDepth - 0 to 36 inclusive, default 0
//	    * EndingDepth - 1 - 36 inclusive, default 1
//	    * ColumnDepth
//	    * DepthUnit - must be inches
//	    * Geometry - point in wgs84
//
//	  Requires the soil:write scope.
//	 </details>
//	 <details><summary> __application/vnd.climate.stand-count.geojson__</summary>
//
//	  Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
//
//	  Each feature in the collection must contain the following entry in its properties section:
//	    * StandPPA - A count of the number of plants per acre:
//
//	  Additionally, the type field of each feature's geometry field must be:
//	    * Point
//
//	  Requires `imagery:write` scope.
//	 </details>
//	 <details><summary> __application/vnd.climate.weed-count.geojson__</summary>
//
//	  Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
//
//	  Each feature in the collection must contain the following entry in its properties section:
//	    * StandPPA - A count of the number of plants per acre:
//
//	  Additionally, the type field of each feature's geometry field must be:
//	    * Point
//
//	  Requires `imagery:write` scope.
//	 </details>
func (s *Uploads) PostUpload(ctx context.Context, request operations.PostUploadRequest) (*operations.PostUploadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/uploads"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.CreatedUpload = &out
		}
	case httpRes.StatusCode == 400:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 503:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
