import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AutoCompleteFieldEnum {
    Ymm = "ymm"
,    Mm = "mm"
,    Make = "make"
,    Model = "model"
,    Trim = "trim"
,    BodyType = "body_type"
,    BodySubtype = "body_subtype"
,    VehicleType = "vehicle_type"
,    Transmission = "transmission"
,    Drivetrain = "drivetrain"
,    FuelType = "fuel_type"
,    ExteriorColor = "exterior_color"
,    InteriorColor = "interior_color"
,    Engine = "engine"
,    EngineSize = "engine_size"
,    EngineBlock = "engine_block"
,    State = "state"
,    City = "city"
}

export enum AutoCompleteIncludeNonVinListingsEnum {
    True = "true"
,    False = "false"
}

export enum AutoCompleteSortByEnum {
    Index = "index"
,    Count = "count"
}


export class AutoCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: AutoCompleteFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_non_vin_listings" })
  includeNonVinListings?: AutoCompleteIncludeNonVinListingsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: AutoCompleteSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term_counts" })
  termCounts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class AutoCompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AutoCompleteQueryParams;
}


export class AutoCompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;

  @Metadata()
  statusCode: number;
}
