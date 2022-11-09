import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListApiSpecRevisionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryListApiSpecRevisionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiSpecRevisionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryListApiSpecRevisionsPathParams;

  @Metadata()
  queryParams: RegistryListApiSpecRevisionsQueryParams;
}


export class RegistryListApiSpecRevisionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listApiSpecRevisionsResponse?: any;

  @Metadata()
  statusCode: number;
}
