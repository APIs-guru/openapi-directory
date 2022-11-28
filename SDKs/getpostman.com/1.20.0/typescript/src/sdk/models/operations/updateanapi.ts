import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAnApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateAnApiRequestBodyApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAnApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: UpdateAnApiRequestBodyApi;
}


export class UpdateAnApi200ApplicationJsonApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class UpdateAnApi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: UpdateAnApi200ApplicationJsonApi;
}


export class UpdateAnApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAnApiPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAnApiRequestBody;
}


export class UpdateAnApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAnApi200ApplicationJsonObject?: UpdateAnApi200ApplicationJson;
}
