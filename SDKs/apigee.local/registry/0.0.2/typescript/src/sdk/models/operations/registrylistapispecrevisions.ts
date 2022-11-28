import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListApiSpecRevisionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryListApiSpecRevisionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApiSpecRevisionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryListApiSpecRevisionsPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryListApiSpecRevisionsQueryParams;
}


export class RegistryListApiSpecRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listApiSpecRevisionsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
