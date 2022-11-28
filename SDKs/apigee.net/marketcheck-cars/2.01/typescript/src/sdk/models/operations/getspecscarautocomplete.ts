import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSpecsCarAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    BodySubtype = "body_subtype",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    Engine = "engine",
    EngineSize = "engine_size",
    EngineBlock = "engine_block"
}


export class GetSpecsCarAutoCompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field: GetSpecsCarAutoCompleteFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_case" })
  ignoreCase?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=input" })
  input: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetSpecsCarAutoCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSpecsCarAutoCompleteQueryParams;
}


export class GetSpecsCarAutoCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
