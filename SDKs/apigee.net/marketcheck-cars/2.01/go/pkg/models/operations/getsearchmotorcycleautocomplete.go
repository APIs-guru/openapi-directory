package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchMotorcycleAutoCompleteFieldEnum string

const (
	GetSearchMotorcycleAutoCompleteFieldEnumMake         GetSearchMotorcycleAutoCompleteFieldEnum = "make"
	GetSearchMotorcycleAutoCompleteFieldEnumModel        GetSearchMotorcycleAutoCompleteFieldEnum = "model"
	GetSearchMotorcycleAutoCompleteFieldEnumTrim         GetSearchMotorcycleAutoCompleteFieldEnum = "trim"
	GetSearchMotorcycleAutoCompleteFieldEnumBodyType     GetSearchMotorcycleAutoCompleteFieldEnum = "body_type"
	GetSearchMotorcycleAutoCompleteFieldEnumVehicleType  GetSearchMotorcycleAutoCompleteFieldEnum = "vehicle_type"
	GetSearchMotorcycleAutoCompleteFieldEnumTransmission GetSearchMotorcycleAutoCompleteFieldEnum = "transmission"
	GetSearchMotorcycleAutoCompleteFieldEnumDrivetrain   GetSearchMotorcycleAutoCompleteFieldEnum = "drivetrain"
	GetSearchMotorcycleAutoCompleteFieldEnumFuelType     GetSearchMotorcycleAutoCompleteFieldEnum = "fuel_type"
	GetSearchMotorcycleAutoCompleteFieldEnumColor        GetSearchMotorcycleAutoCompleteFieldEnum = "color"
	GetSearchMotorcycleAutoCompleteFieldEnumEngine       GetSearchMotorcycleAutoCompleteFieldEnum = "engine"
	GetSearchMotorcycleAutoCompleteFieldEnumState        GetSearchMotorcycleAutoCompleteFieldEnum = "state"
	GetSearchMotorcycleAutoCompleteFieldEnumCity         GetSearchMotorcycleAutoCompleteFieldEnum = "city"
)

type GetSearchMotorcycleAutoCompleteSortByEnum string

const (
	GetSearchMotorcycleAutoCompleteSortByEnumIndex GetSearchMotorcycleAutoCompleteSortByEnum = "index"
	GetSearchMotorcycleAutoCompleteSortByEnumCount GetSearchMotorcycleAutoCompleteSortByEnum = "count"
)

type GetSearchMotorcycleAutoCompleteQueryParams struct {
	APIKey        *string                                    `queryParam:"style=form,explode=true,name=api_key"`
	BodyType      *string                                    `queryParam:"style=form,explode=true,name=body_type"`
	City          *string                                    `queryParam:"style=form,explode=true,name=city"`
	Color         *string                                    `queryParam:"style=form,explode=true,name=color"`
	Drivetrain    *string                                    `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine        *string                                    `queryParam:"style=form,explode=true,name=engine"`
	Field         GetSearchMotorcycleAutoCompleteFieldEnum   `queryParam:"style=form,explode=true,name=field"`
	FuelType      *string                                    `queryParam:"style=form,explode=true,name=fuel_type"`
	IgnoreCase    *bool                                      `queryParam:"style=form,explode=true,name=ignore_case"`
	Input         string                                     `queryParam:"style=form,explode=true,name=input"`
	InventoryType *shared.InventoryTypeEnum                  `queryParam:"style=form,explode=true,name=inventory_type"`
	Make          *string                                    `queryParam:"style=form,explode=true,name=make"`
	Model         *string                                    `queryParam:"style=form,explode=true,name=model"`
	SortBy        *GetSearchMotorcycleAutoCompleteSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
	State         *string                                    `queryParam:"style=form,explode=true,name=state"`
	TermCounts    *bool                                      `queryParam:"style=form,explode=true,name=term_counts"`
	Transmission  *string                                    `queryParam:"style=form,explode=true,name=transmission"`
	Trim          *string                                    `queryParam:"style=form,explode=true,name=trim"`
	VehicleType   *string                                    `queryParam:"style=form,explode=true,name=vehicle_type"`
	Year          *string                                    `queryParam:"style=form,explode=true,name=year"`
}

type GetSearchMotorcycleAutoCompleteRequest struct {
	QueryParams GetSearchMotorcycleAutoCompleteQueryParams
}

type GetSearchMotorcycleAutoCompleteResponse struct {
	ContentType                string
	Error                      *shared.Error
	SearchAutoCompleteResponse *shared.SearchAutoCompleteResponse
	StatusCode                 int64
}
