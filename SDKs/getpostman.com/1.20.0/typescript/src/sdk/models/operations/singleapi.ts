import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class SingleApi200ApplicationJsonApi extends SpeakeasyBase {
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


export class SingleApi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: SingleApi200ApplicationJsonApi;
}


export class SingleApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleApiPathParams;
}


export class SingleApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleApi200ApplicationJsonObject?: SingleApi200ApplicationJson;
}
