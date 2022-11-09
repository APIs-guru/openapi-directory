import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class SingleApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleApiPathParams;
}


export class SingleApi200ApplicationJsonApi extends SpeakeasyBase {
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


export class SingleApi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: SingleApi200ApplicationJsonApi;
}


export class SingleApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleApi200ApplicationJsonObject?: SingleApi200ApplicationJson;
}
