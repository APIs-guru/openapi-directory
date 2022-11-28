import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSearchMotorcycleAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    Color = "color",
    Engine = "engine",
    State = "state",
    City = "city"
}

export enum GetSearchMotorcycleAutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}


export class GetSearchMotorcycleAutoCompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: GetSearchMotorcycleAutoCompleteFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inventory_type" })
  inventoryType?: shared.InventoryTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: GetSearchMotorcycleAutoCompleteSortByEnum;

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


export class GetSearchMotorcycleAutoCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchMotorcycleAutoCompleteQueryParams;
}


export class GetSearchMotorcycleAutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
