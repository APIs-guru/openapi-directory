import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VehicleMotStatusEnum {
    NoDetailsHeldByDvla = "No details held by DVLA",
    NoResultsReturned = "No results returned",
    NotValid = "Not valid",
    Valid = "Valid"
}
export declare enum VehicleTaxStatusEnum {
    NotTaxedForOnRoadUse = "Not Taxed for on Road Use",
    Sorn = "SORN",
    Taxed = "Taxed",
    Untaxed = "Untaxed"
}
export declare class Vehicle extends SpeakeasyBase {
    artEndDate?: Date;
    co2Emissions?: number;
    colour?: string;
    dateOfLastV5CIssued?: Date;
    engineCapacity?: number;
    euroStatus?: string;
    fuelType?: string;
    make?: string;
    markedForExport?: boolean;
    monthOfFirstDvlaRegistration?: Date;
    monthOfFirstRegistration?: Date;
    motExpiryDate?: Date;
    motStatus?: VehicleMotStatusEnum;
    realDrivingEmissions?: string;
    registrationNumber: string;
    revenueWeight?: number;
    taxDueDate?: Date;
    taxStatus?: VehicleTaxStatusEnum;
    typeApproval?: string;
    wheelplan?: string;
    yearOfManufacture?: number;
}
