import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListApiSpecsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryListApiSpecsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiSpecsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryListApiSpecsPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryListApiSpecsQueryParams;
}


export class RegistryListApiSpecsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listApiSpecsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
