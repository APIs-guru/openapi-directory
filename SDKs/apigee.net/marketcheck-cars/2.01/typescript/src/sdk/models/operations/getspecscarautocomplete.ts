import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSpecsCarAutoCompleteFieldEnum {
    Make = "make"
,    Model = "model"
,    Trim = "trim"
,    BodyType = "body_type"
,    BodySubtype = "body_subtype"
,    VehicleType = "vehicle_type"
,    Transmission = "transmission"
,    Drivetrain = "drivetrain"
,    FuelType = "fuel_type"
,    Engine = "engine"
,    EngineSize = "engine_size"
,    EngineBlock = "engine_block"
}


export class GetSpecsCarAutoCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: GetSpecsCarAutoCompleteFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetSpecsCarAutoCompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSpecsCarAutoCompleteQueryParams;
}


export class GetSpecsCarAutoCompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;

  @Metadata()
  statusCode: number;
}
