package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordsRecordIDJSONPathParams struct {
	RecordID int64 `pathParam:"style=simple,explode=false,name=record_id"`
}

type GetRecordsRecordIDJSONFormatEnum string

const (
	GetRecordsRecordIDJSONFormatEnumJSON GetRecordsRecordIDJSONFormatEnum = "json"
	GetRecordsRecordIDJSONFormatEnumXML  GetRecordsRecordIDJSONFormatEnum = "xml"
)

type GetRecordsRecordIDJSONQueryParams struct {
	APIKey string                           `queryParam:"style=form,explode=true,name=api_key"`
	Fields *string                          `queryParam:"style=form,explode=false,name=fields"`
	Format GetRecordsRecordIDJSONFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetRecordsRecordIDJSONRequest struct {
	PathParams  GetRecordsRecordIDJSONPathParams
	QueryParams GetRecordsRecordIDJSONQueryParams
}

type GetRecordsRecordIDJSONResponse struct {
	Body                                           []byte
	ContentType                                    string
	GetRecordsRecordIDJSON403ApplicationJSONObject map[string]interface{}
	GetRecordsRecordIDJSON404ApplicationJSONObject map[string]interface{}
	StatusCode                                     int64
	Record                                         *shared.Record
}
