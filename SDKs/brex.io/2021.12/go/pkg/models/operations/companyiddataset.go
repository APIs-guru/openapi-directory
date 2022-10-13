package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyIDDatasetDatasetEnum string

const (
	CompanyIDDatasetDatasetEnumUnknown CompanyIDDatasetDatasetEnum = ""
	CompanyIDDatasetDatasetEnumMini    CompanyIDDatasetDatasetEnum = "mini"
	CompanyIDDatasetDatasetEnumMaster  CompanyIDDatasetDatasetEnum = "master"
	CompanyIDDatasetDatasetEnumFull    CompanyIDDatasetDatasetEnum = "full"
	CompanyIDDatasetDatasetEnumRefresh CompanyIDDatasetDatasetEnum = "refresh"
)

type CompanyIDDatasetPathParams struct {
	Dataset CompanyIDDatasetDatasetEnum `pathParam:"style=simple,explode=false,name=dataset"`
	ID      string                      `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyIDDatasetLangEnum string

const (
	CompanyIDDatasetLangEnumUnknown CompanyIDDatasetLangEnum = ""
	CompanyIDDatasetLangEnumEn      CompanyIDDatasetLangEnum = "EN"
	CompanyIDDatasetLangEnumEs      CompanyIDDatasetLangEnum = "ES"
	CompanyIDDatasetLangEnumFr      CompanyIDDatasetLangEnum = "FR"
)

type CompanyIDDatasetQueryParams struct {
	CheckStockListing *bool                     `queryParam:"style=form,explode=true,name=check_stock_listing"`
	Lang              *CompanyIDDatasetLangEnum `queryParam:"style=form,explode=true,name=lang"`
}

type CompanyIDDatasetSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyIDDatasetRequest struct {
	PathParams  CompanyIDDatasetPathParams
	QueryParams CompanyIDDatasetQueryParams
	Security    CompanyIDDatasetSecurity
}

type CompanyIDDatasetResponse struct {
	CompanyIDDatasetDefaultApplicationJSONAny                                                                              *interface{}
	ContentType                                                                                                            string
	StatusCode                                                                                                             int64
	Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany *interface{}
}
