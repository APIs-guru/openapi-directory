import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAnApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class DeleteAnApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnApiVersionPathParams;
}


export class DeleteAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: DeleteAnApiVersion200ApplicationJsonVersion;
}


export class DeleteAnApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteAnApiVersion200ApplicationJsonObject?: DeleteAnApiVersion200ApplicationJson;
}
