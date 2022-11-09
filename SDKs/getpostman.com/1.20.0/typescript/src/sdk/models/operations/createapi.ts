import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateApiRequestBodyApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}


export class CreateApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: CreateApiRequestBodyApi;
}


export class CreateApiRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateApiQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateApiRequestBody;
}


export class CreateApi200ApplicationJsonApi extends SpeakeasyBase {
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


export class CreateApi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: CreateApi200ApplicationJsonApi;
}


export class CreateApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createApi200ApplicationJsonObject?: CreateApi200ApplicationJson;
}
