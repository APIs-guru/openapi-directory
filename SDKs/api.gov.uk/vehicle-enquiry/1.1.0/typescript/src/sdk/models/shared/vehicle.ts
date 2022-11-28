import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VehicleMotStatusEnum {
    NoDetailsHeldByDvla = "No details held by DVLA",
    NoResultsReturned = "No results returned",
    NotValid = "Not valid",
    Valid = "Valid"
}

export enum VehicleTaxStatusEnum {
    NotTaxedForOnRoadUse = "Not Taxed for on Road Use",
    Sorn = "SORN",
    Taxed = "Taxed",
    Untaxed = "Untaxed"
}


export class Vehicle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artEndDate" })
  artEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=co2Emissions" })
  co2Emissions?: number;

  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=dateOfLastV5CIssued" })
  dateOfLastV5CIssued?: Date;

  @SpeakeasyMetadata({ data: "json, name=engineCapacity" })
  engineCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=euroStatus" })
  euroStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=fuelType" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=markedForExport" })
  markedForExport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monthOfFirstDvlaRegistration" })
  monthOfFirstDvlaRegistration?: Date;

  @SpeakeasyMetadata({ data: "json, name=monthOfFirstRegistration" })
  monthOfFirstRegistration?: Date;

  @SpeakeasyMetadata({ data: "json, name=motExpiryDate" })
  motExpiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=motStatus" })
  motStatus?: VehicleMotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=realDrivingEmissions" })
  realDrivingEmissions?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber: string;

  @SpeakeasyMetadata({ data: "json, name=revenueWeight" })
  revenueWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=taxDueDate" })
  taxDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxStatus" })
  taxStatus?: VehicleTaxStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=typeApproval" })
  typeApproval?: string;

  @SpeakeasyMetadata({ data: "json, name=wheelplan" })
  wheelplan?: string;

  @SpeakeasyMetadata({ data: "json, name=yearOfManufacture" })
  yearOfManufacture?: number;
}
