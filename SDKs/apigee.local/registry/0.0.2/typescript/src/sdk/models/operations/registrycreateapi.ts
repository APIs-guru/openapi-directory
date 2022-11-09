import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryCreateApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateApiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_id" })
  apiId?: string;
}


export class RegistryCreateApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryCreateApiPathParams;

  @Metadata()
  queryParams: RegistryCreateApiQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiResponse extends SpeakeasyBase {
  @Metadata()
  api?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
