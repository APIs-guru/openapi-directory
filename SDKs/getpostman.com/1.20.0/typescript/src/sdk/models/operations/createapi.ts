import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApiQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateApiRequestBodyApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}


export class CreateApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: CreateApiRequestBodyApi;
}


export class CreateApi200ApplicationJsonApi extends SpeakeasyBase {
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


export class CreateApi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: CreateApi200ApplicationJsonApi;
}


export class CreateApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateApiQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateApiRequestBody;
}


export class CreateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createApi200ApplicationJsonObject?: CreateApi200ApplicationJson;
}
