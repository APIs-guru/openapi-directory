import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSearchMotorcycleAutoCompleteFieldEnum {
    Make = "make"
,    Model = "model"
,    Trim = "trim"
,    BodyType = "body_type"
,    VehicleType = "vehicle_type"
,    Transmission = "transmission"
,    Drivetrain = "drivetrain"
,    FuelType = "fuel_type"
,    Color = "color"
,    Engine = "engine"
,    State = "state"
,    City = "city"
}

export enum GetSearchMotorcycleAutoCompleteSortByEnum {
    Index = "index"
,    Count = "count"
}


export class GetSearchMotorcycleAutoCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: GetSearchMotorcycleAutoCompleteFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inventory_type" })
  inventoryType?: shared.InventoryTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: GetSearchMotorcycleAutoCompleteSortByEnum;

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


export class GetSearchMotorcycleAutoCompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchMotorcycleAutoCompleteQueryParams;
}


export class GetSearchMotorcycleAutoCompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;

  @Metadata()
  statusCode: number;
}
