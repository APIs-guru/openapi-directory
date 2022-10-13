package operations

import (
	"openapi/pkg/models/shared"
)

type GetMdsQueryParams struct {
	APIKey                *string                      `queryParam:"style=form,explode=true,name=api_key"`
	BaseExteriorColor     *string                      `queryParam:"style=form,explode=true,name=base_exterior_color"`
	BaseInteriorColor     *string                      `queryParam:"style=form,explode=true,name=base_interior_color"`
	BodySubtype           *string                      `queryParam:"style=form,explode=true,name=body_subtype"`
	BodyType              *string                      `queryParam:"style=form,explode=true,name=body_type"`
	CarType               *shared.CarCarTypeEnum       `queryParam:"style=form,explode=true,name=car_type"`
	Carfax1Owner          *shared.Carfax1OwnerEnum     `queryParam:"style=form,explode=true,name=carfax_1_owner"`
	CarfaxCleanTitle      *shared.CarfaxCleanTitleEnum `queryParam:"style=form,explode=true,name=carfax_clean_title"`
	City                  *string                      `queryParam:"style=form,explode=true,name=city"`
	CityMpgRange          *string                      `queryParam:"style=form,explode=true,name=city_mpg_range"`
	Country               *shared.CountryEnum          `queryParam:"style=form,explode=true,name=country"`
	Cylinders             *string                      `queryParam:"style=form,explode=true,name=cylinders"`
	DealerID              *string                      `queryParam:"style=form,explode=true,name=dealer_id"`
	DealerType            *shared.DealerTypeEnum       `queryParam:"style=form,explode=true,name=dealer_type"`
	DealershipGroupName   *string                      `queryParam:"style=form,explode=true,name=dealership_group_name"`
	Debug                 *bool                        `queryParam:"style=form,explode=true,name=debug"`
	Dom180Range           *string                      `queryParam:"style=form,explode=true,name=dom_180_range"`
	DomActiveRange        *string                      `queryParam:"style=form,explode=true,name=dom_active_range"`
	DomRange              *string                      `queryParam:"style=form,explode=true,name=dom_range"`
	Doors                 *string                      `queryParam:"style=form,explode=true,name=doors"`
	Drivetrain            *string                      `queryParam:"style=form,explode=true,name=drivetrain"`
	Engine                *string                      `queryParam:"style=form,explode=true,name=engine"`
	EngineAspiration      *string                      `queryParam:"style=form,explode=true,name=engine_aspiration"`
	EngineBlock           *string                      `queryParam:"style=form,explode=true,name=engine_block"`
	EngineSize            *string                      `queryParam:"style=form,explode=true,name=engine_size"`
	Exact                 *bool                        `queryParam:"style=form,explode=true,name=exact"`
	ExteriorColor         *string                      `queryParam:"style=form,explode=true,name=exterior_color"`
	FinanceDownPayment    *string                      `queryParam:"style=form,explode=true,name=finance_down_payment"`
	FinanceDownPaymentPer *string                      `queryParam:"style=form,explode=true,name=finance_down_payment_per"`
	FinanceEmp            *string                      `queryParam:"style=form,explode=true,name=finance_emp"`
	FinanceLoanApr        *string                      `queryParam:"style=form,explode=true,name=finance_loan_apr"`
	FinanceLoanTerm       *string                      `queryParam:"style=form,explode=true,name=finance_loan_term"`
	FuelType              *string                      `queryParam:"style=form,explode=true,name=fuel_type"`
	HighwayMpgRange       *string                      `queryParam:"style=form,explode=true,name=highway_mpg_range"`
	IncludeSold           *bool                        `queryParam:"style=form,explode=true,name=include_sold"`
	InteriorColor         *string                      `queryParam:"style=form,explode=true,name=interior_color"`
	Latitude              *float64                     `queryParam:"style=form,explode=true,name=latitude"`
	LeaseDownPayment      *string                      `queryParam:"style=form,explode=true,name=lease_down_payment"`
	LeaseEmp              *string                      `queryParam:"style=form,explode=true,name=lease_emp"`
	LeaseTerm             *string                      `queryParam:"style=form,explode=true,name=lease_term"`
	Longitude             *float64                     `queryParam:"style=form,explode=true,name=longitude"`
	Make                  *string                      `queryParam:"style=form,explode=true,name=make"`
	MilesRange            *string                      `queryParam:"style=form,explode=true,name=miles_range"`
	Model                 *string                      `queryParam:"style=form,explode=true,name=model"`
	MsaCode               *string                      `queryParam:"style=form,explode=true,name=msa_code"`
	MsrpRange             *string                      `queryParam:"style=form,explode=true,name=msrp_range"`
	PriceRange            *string                      `queryParam:"style=form,explode=true,name=price_range"`
	Radius                *int32                       `queryParam:"style=form,explode=true,name=radius"`
	Source                *string                      `queryParam:"style=form,explode=true,name=source"`
	State                 *string                      `queryParam:"style=form,explode=true,name=state"`
	Transmission          *string                      `queryParam:"style=form,explode=true,name=transmission"`
	Trim                  *string                      `queryParam:"style=form,explode=true,name=trim"`
	VehicleType           *string                      `queryParam:"style=form,explode=true,name=vehicle_type"`
	Vin                   *string                      `queryParam:"style=form,explode=true,name=vin"`
	Year                  *string                      `queryParam:"style=form,explode=true,name=year"`
	Ymmt                  *string                      `queryParam:"style=form,explode=true,name=ymmt"`
	Zip                   *string                      `queryParam:"style=form,explode=true,name=zip"`
}

type GetMdsRequest struct {
	QueryParams GetMdsQueryParams
}

type GetMdsResponse struct {
	ContentType string
	Error       *shared.Error
	Mds         *shared.Mds
	StatusCode  int64
}
