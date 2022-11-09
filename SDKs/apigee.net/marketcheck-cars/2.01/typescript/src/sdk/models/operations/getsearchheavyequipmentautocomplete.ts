import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSearchHeavyEquipmentAutoCompleteFieldEnum {
    Make = "make"
,    Model = "model"
,    Trim = "trim"
,    BodyType = "body_type"
,    Transmission = "transmission"
,    Drivetrain = "drivetrain"
,    FuelType = "fuel_type"
,    ExteriorColor = "exterior_color"
,    InteriorColor = "interior_color"
,    Engine = "engine"
,    Category = "category"
,    SubCategory = "sub_category"
,    State = "state"
,    City = "city"
}

export enum GetSearchHeavyEquipmentAutoCompleteSortByEnum {
    Index = "index"
,    Count = "count"
}


export class GetSearchHeavyEquipmentAutoCompleteQueryParams extends SpeakeasyBase {
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
  field: GetSearchHeavyEquipmentAutoCompleteFieldEnum;

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
  sortBy?: GetSearchHeavyEquipmentAutoCompleteSortByEnum;

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


export class GetSearchHeavyEquipmentAutoCompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchHeavyEquipmentAutoCompleteQueryParams;
}


export class GetSearchHeavyEquipmentAutoCompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;

  @Metadata()
  statusCode: number;
}
