import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAnApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class UpdateAnApiVersionRequestBodyVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAnApiVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: UpdateAnApiVersionRequestBodyVersion;
}


export class UpdateAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}


export class UpdateAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: UpdateAnApiVersion200ApplicationJsonVersion;
}


export class UpdateAnApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAnApiVersionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAnApiVersionRequestBody;
}


export class UpdateAnApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAnApiVersion200ApplicationJsonObject?: UpdateAnApiVersion200ApplicationJson;
}
