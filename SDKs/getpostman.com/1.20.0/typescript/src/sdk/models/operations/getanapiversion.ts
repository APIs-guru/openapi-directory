import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetAnApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnApiVersionPathParams;
}


export class GetAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=schema" })
  schema?: string[];

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}


export class GetAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: GetAnApiVersion200ApplicationJsonVersion;
}


export class GetAnApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAnApiVersion200ApplicationJsonObject?: GetAnApiVersion200ApplicationJson;
}
