import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RegistryListProjectsQueryParams;
}


export class RegistryListProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listProjectsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
