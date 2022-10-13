package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchHeavyEquipmentAutoCompleteFieldEnum string

const (
	GetSearchHeavyEquipmentAutoCompleteFieldEnumMake          GetSearchHeavyEquipmentAutoCompleteFieldEnum = "make"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumModel         GetSearchHeavyEquipmentAutoCompleteFieldEnum = "model"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumTrim          GetSearchHeavyEquipmentAutoCompleteFieldEnum = "trim"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumBodyType      GetSearchHeavyEquipmentAutoCompleteFieldEnum = "body_type"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumTransmission  GetSearchHeavyEquipmentAutoCompleteFieldEnum = "transmission"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumDrivetrain    GetSearchHeavyEquipmentAutoCompleteFieldEnum = "drivetrain"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumFuelType      GetSearchHeavyEquipmentAutoCompleteFieldEnum = "fuel_type"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumExteriorColor GetSearchHeavyEquipmentAutoCompleteFieldEnum = "exterior_color"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumInteriorColor GetSearchHeavyEquipmentAutoCompleteFieldEnum = "interior_color"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumEngine        GetSearchHeavyEquipmentAutoCompleteFieldEnum = "engine"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumCategory      GetSearchHeavyEquipmentAutoCompleteFieldEnum = "category"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumSubCategory   GetSearchHeavyEquipmentAutoCompleteFieldEnum = "sub_category"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumState         GetSearchHeavyEquipmentAutoCompleteFieldEnum = "state"
	GetSearchHeavyEquipmentAutoCompleteFieldEnumCity          GetSearchHeavyEquipmentAutoCompleteFieldEnum = "city"
)

type GetSearchHeavyEquipmentAutoCompleteSortByEnum string

const (
	GetSearchHeavyEquipmentAutoCompleteSortByEnumIndex GetSearchHeavyEquipmentAutoCompleteSortByEnum = "index"
	GetSearchHeavyEquipmentAutoCompleteSortByEnumCount GetSearchHeavyEquipmentAutoCompleteSortByEnum = "count"
)

type GetSearchHeavyEquipmentAutoCompleteQueryParams struct {
	APIKey        *string                                        `queryParam:"style=form,explode=true,name=api_key"`
	BodyType      *string                                        `queryParam:"style=form,explode=true,name=body_type"`
	City          *string                                        `queryParam:"style=form,explode=true,name=city"`
	Color         *string                                        `queryParam:"style=form,explode=true,name=color"`
	Drivetrain    *string                                        `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine        *string                                        `queryParam:"style=form,explode=true,name=engine"`
	Field         GetSearchHeavyEquipmentAutoCompleteFieldEnum   `queryParam:"style=form,explode=true,name=field"`
	FuelType      *string                                        `queryParam:"style=form,explode=true,name=fuel_type"`
	IgnoreCase    *bool                                          `queryParam:"style=form,explode=true,name=ignore_case"`
	Input         string                                         `queryParam:"style=form,explode=true,name=input"`
	InventoryType *shared.InventoryTypeEnum                      `queryParam:"style=form,explode=true,name=inventory_type"`
	Make          *string                                        `queryParam:"style=form,explode=true,name=make"`
	Model         *string                                        `queryParam:"style=form,explode=true,name=model"`
	SortBy        *GetSearchHeavyEquipmentAutoCompleteSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
	State         *string                                        `queryParam:"style=form,explode=true,name=state"`
	TermCounts    *bool                                          `queryParam:"style=form,explode=true,name=term_counts"`
	Transmission  *string                                        `queryParam:"style=form,explode=true,name=transmission"`
	Trim          *string                                        `queryParam:"style=form,explode=true,name=trim"`
	VehicleType   *string                                        `queryParam:"style=form,explode=true,name=vehicle_type"`
	Year          *string                                        `queryParam:"style=form,explode=true,name=year"`
}

type GetSearchHeavyEquipmentAutoCompleteRequest struct {
	QueryParams GetSearchHeavyEquipmentAutoCompleteQueryParams
}

type GetSearchHeavyEquipmentAutoCompleteResponse struct {
	ContentType                string
	Error                      *shared.Error
	SearchAutoCompleteResponse *shared.SearchAutoCompleteResponse
	StatusCode                 int64
}
