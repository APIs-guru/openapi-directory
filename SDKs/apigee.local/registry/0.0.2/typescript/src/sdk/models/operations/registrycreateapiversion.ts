import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryCreateApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryCreateApiVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_version_id" })
  apiVersionId?: string;
}


export class RegistryCreateApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryCreateApiVersionPathParams;

  @Metadata()
  queryParams: RegistryCreateApiVersionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  apiVersion?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
