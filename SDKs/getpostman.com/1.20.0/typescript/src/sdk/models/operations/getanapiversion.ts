import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string[];

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;
}


export class GetAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: GetAnApiVersion200ApplicationJsonVersion;
}


export class GetAnApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnApiVersionPathParams;
}


export class GetAnApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAnApiVersion200ApplicationJsonObject?: GetAnApiVersion200ApplicationJson;
}
