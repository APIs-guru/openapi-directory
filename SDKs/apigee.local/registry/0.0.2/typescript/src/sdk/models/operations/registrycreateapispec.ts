import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryCreateApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryCreateApiSpecQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_spec_id" })
  apiSpecId?: string;
}


export class RegistryCreateApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryCreateApiSpecPathParams;

  @Metadata()
  queryParams: RegistryCreateApiSpecQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryCreateApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  apiSpec?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
