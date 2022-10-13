package shared

import (
	"time"
)

type VehicleMotStatusEnum string

const (
	VehicleMotStatusEnumNoDetailsHeldByDvla VehicleMotStatusEnum = "No details held by DVLA"
	VehicleMotStatusEnumNoResultsReturned   VehicleMotStatusEnum = "No results returned"
	VehicleMotStatusEnumNotValid            VehicleMotStatusEnum = "Not valid"
	VehicleMotStatusEnumValid               VehicleMotStatusEnum = "Valid"
)

type VehicleTaxStatusEnum string

const (
	VehicleTaxStatusEnumNotTaxedForOnRoadUse VehicleTaxStatusEnum = "Not Taxed for on Road Use"
	VehicleTaxStatusEnumSorn                 VehicleTaxStatusEnum = "SORN"
	VehicleTaxStatusEnumTaxed                VehicleTaxStatusEnum = "Taxed"
	VehicleTaxStatusEnumUntaxed              VehicleTaxStatusEnum = "Untaxed"
)

type Vehicle struct {
	ArtEndDate                   *time.Time            `json:"artEndDate"`
	Co2Emissions                 *int32                `json:"co2Emissions"`
	Colour                       *string               `json:"colour"`
	DateOfLastV5CIssued          *time.Time            `json:"dateOfLastV5CIssued"`
	EngineCapacity               *int32                `json:"engineCapacity"`
	EuroStatus                   *string               `json:"euroStatus"`
	FuelType                     *string               `json:"fuelType"`
	Make                         *string               `json:"make"`
	MarkedForExport              *bool                 `json:"markedForExport"`
	MonthOfFirstDvlaRegistration *time.Time            `json:"monthOfFirstDvlaRegistration"`
	MonthOfFirstRegistration     *time.Time            `json:"monthOfFirstRegistration"`
	MotExpiryDate                *time.Time            `json:"motExpiryDate"`
	MotStatus                    *VehicleMotStatusEnum `json:"motStatus"`
	RealDrivingEmissions         *string               `json:"realDrivingEmissions"`
	RegistrationNumber           string                `json:"registrationNumber"`
	RevenueWeight                *int32                `json:"revenueWeight"`
	TaxDueDate                   *time.Time            `json:"taxDueDate"`
	TaxStatus                    *VehicleTaxStatusEnum `json:"taxStatus"`
	TypeApproval                 *string               `json:"typeApproval"`
	Wheelplan                    *string               `json:"wheelplan"`
	YearOfManufacture            *int32                `json:"yearOfManufacture"`
}
