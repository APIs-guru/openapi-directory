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
	ArtEndDate                   *time.Time            `json:"artEndDate,omitempty"`
	Co2Emissions                 *int32                `json:"co2Emissions,omitempty"`
	Colour                       *string               `json:"colour,omitempty"`
	DateOfLastV5CIssued          *time.Time            `json:"dateOfLastV5CIssued,omitempty"`
	EngineCapacity               *int32                `json:"engineCapacity,omitempty"`
	EuroStatus                   *string               `json:"euroStatus,omitempty"`
	FuelType                     *string               `json:"fuelType,omitempty"`
	Make                         *string               `json:"make,omitempty"`
	MarkedForExport              *bool                 `json:"markedForExport,omitempty"`
	MonthOfFirstDvlaRegistration *time.Time            `json:"monthOfFirstDvlaRegistration,omitempty"`
	MonthOfFirstRegistration     *time.Time            `json:"monthOfFirstRegistration,omitempty"`
	MotExpiryDate                *time.Time            `json:"motExpiryDate,omitempty"`
	MotStatus                    *VehicleMotStatusEnum `json:"motStatus,omitempty"`
	RealDrivingEmissions         *string               `json:"realDrivingEmissions,omitempty"`
	RegistrationNumber           string                `json:"registrationNumber"`
	RevenueWeight                *int32                `json:"revenueWeight,omitempty"`
	TaxDueDate                   *time.Time            `json:"taxDueDate,omitempty"`
	TaxStatus                    *VehicleTaxStatusEnum `json:"taxStatus,omitempty"`
	TypeApproval                 *string               `json:"typeApproval,omitempty"`
	Wheelplan                    *string               `json:"wheelplan,omitempty"`
	YearOfManufacture            *int32                `json:"yearOfManufacture,omitempty"`
}
