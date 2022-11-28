import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListApisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListApisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryListApisPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryListApisQueryParams;
}


export class RegistryListApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listApisResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
