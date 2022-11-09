import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListApiVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListApiVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryListApiVersionsPathParams;

  @Metadata()
  queryParams: RegistryListApiVersionsQueryParams;
}


export class RegistryListApiVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listApiVersionsResponse?: any;

  @Metadata()
  statusCode: number;
}
