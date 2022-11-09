import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListApiSpecsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryListApiSpecsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiSpecsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryListApiSpecsPathParams;

  @Metadata()
  queryParams: RegistryListApiSpecsQueryParams;
}


export class RegistryListApiSpecsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listApiSpecsResponse?: any;

  @Metadata()
  statusCode: number;
}
