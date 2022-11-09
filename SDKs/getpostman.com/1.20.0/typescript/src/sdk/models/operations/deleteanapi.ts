import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAnApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class DeleteAnApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnApiPathParams;
}


export class DeleteAnApi200ApplicationJsonApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class DeleteAnApi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: DeleteAnApi200ApplicationJsonApi;
}


export class DeleteAnApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteAnApi200ApplicationJsonObject?: DeleteAnApi200ApplicationJson;
}
