import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAnApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class UpdateAnApiVersionRequestBodyVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAnApiVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: UpdateAnApiVersionRequestBodyVersion;
}


export class UpdateAnApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAnApiVersionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateAnApiVersionRequestBody;
}


export class UpdateAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}


export class UpdateAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: UpdateAnApiVersion200ApplicationJsonVersion;
}


export class UpdateAnApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAnApiVersion200ApplicationJsonObject?: UpdateAnApiVersion200ApplicationJson;
}
