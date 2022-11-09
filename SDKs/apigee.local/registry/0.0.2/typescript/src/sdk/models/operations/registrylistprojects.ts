import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListProjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListProjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RegistryListProjectsQueryParams;
}


export class RegistryListProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listProjectsResponse?: any;

  @Metadata()
  statusCode: number;
}
