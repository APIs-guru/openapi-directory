import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListApiVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListApiVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryListApiVersionsPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryListApiVersionsQueryParams;
}


export class RegistryListApiVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listApiVersionsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
