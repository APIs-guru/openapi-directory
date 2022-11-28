import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAnApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class DeleteAnApi200ApplicationJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteAnApi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: DeleteAnApi200ApplicationJsonApi;
}


export class DeleteAnApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnApiPathParams;
}


export class DeleteAnApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteAnApi200ApplicationJsonObject?: DeleteAnApi200ApplicationJson;
}
