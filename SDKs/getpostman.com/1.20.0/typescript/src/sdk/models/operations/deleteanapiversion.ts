import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAnApiVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class DeleteAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteAnApiVersion200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: DeleteAnApiVersion200ApplicationJsonVersion;
}


export class DeleteAnApiVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnApiVersionPathParams;
}


export class DeleteAnApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteAnApiVersion200ApplicationJsonObject?: DeleteAnApiVersion200ApplicationJson;
}
