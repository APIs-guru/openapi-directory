import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AutoCompleteFieldEnum {
    Ymm = "ymm",
    Mm = "mm",
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    BodySubtype = "body_subtype",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    ExteriorColor = "exterior_color",
    InteriorColor = "interior_color",
    Engine = "engine",
    EngineSize = "engine_size",
    EngineBlock = "engine_block",
    State = "state",
    City = "city"
}

export enum AutoCompleteIncludeNonVinListingsEnum {
    True = "true",
    False = "false"
}

export enum AutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}


export class AutoCompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: AutoCompleteFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" })
  includeNonVinListings?: AutoCompleteIncludeNonVinListingsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: AutoCompleteSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_counts" })
  termCounts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class AutoCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AutoCompleteQueryParams;
}


export class AutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
