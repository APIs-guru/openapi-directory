import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAnApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateAnApiRequestBodyApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAnApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: UpdateAnApiRequestBodyApi;
}


export class UpdateAnApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAnApiPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateAnApiRequestBody;
}


export class UpdateAnApi200ApplicationJsonApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class UpdateAnApi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: UpdateAnApi200ApplicationJsonApi;
}


export class UpdateAnApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAnApi200ApplicationJsonObject?: UpdateAnApi200ApplicationJson;
}
