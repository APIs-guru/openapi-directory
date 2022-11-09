import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VehicleMotStatusEnum {
    NoDetailsHeldByDvla = "No details held by DVLA"
,    NoResultsReturned = "No results returned"
,    NotValid = "Not valid"
,    Valid = "Valid"
}

export enum VehicleTaxStatusEnum {
    NotTaxedForOnRoadUse = "Not Taxed for on Road Use"
,    Sorn = "SORN"
,    Taxed = "Taxed"
,    Untaxed = "Untaxed"
}


export class Vehicle extends SpeakeasyBase {
  @Metadata({ data: "json, name=artEndDate" })
  artEndDate?: Date;

  @Metadata({ data: "json, name=co2Emissions" })
  co2Emissions?: number;

  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=dateOfLastV5CIssued" })
  dateOfLastV5CIssued?: Date;

  @Metadata({ data: "json, name=engineCapacity" })
  engineCapacity?: number;

  @Metadata({ data: "json, name=euroStatus" })
  euroStatus?: string;

  @Metadata({ data: "json, name=fuelType" })
  fuelType?: string;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=markedForExport" })
  markedForExport?: boolean;

  @Metadata({ data: "json, name=monthOfFirstDvlaRegistration" })
  monthOfFirstDvlaRegistration?: Date;

  @Metadata({ data: "json, name=monthOfFirstRegistration" })
  monthOfFirstRegistration?: Date;

  @Metadata({ data: "json, name=motExpiryDate" })
  motExpiryDate?: Date;

  @Metadata({ data: "json, name=motStatus" })
  motStatus?: VehicleMotStatusEnum;

  @Metadata({ data: "json, name=realDrivingEmissions" })
  realDrivingEmissions?: string;

  @Metadata({ data: "json, name=registrationNumber" })
  registrationNumber: string;

  @Metadata({ data: "json, name=revenueWeight" })
  revenueWeight?: number;

  @Metadata({ data: "json, name=taxDueDate" })
  taxDueDate?: Date;

  @Metadata({ data: "json, name=taxStatus" })
  taxStatus?: VehicleTaxStatusEnum;

  @Metadata({ data: "json, name=typeApproval" })
  typeApproval?: string;

  @Metadata({ data: "json, name=wheelplan" })
  wheelplan?: string;

  @Metadata({ data: "json, name=yearOfManufacture" })
  yearOfManufacture?: number;
}
