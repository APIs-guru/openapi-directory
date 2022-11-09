import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListApisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListApisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListApisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryListApisPathParams;

  @Metadata()
  queryParams: RegistryListApisQueryParams;
}


export class RegistryListApisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listApisResponse?: any;

  @Metadata()
  statusCode: number;
}
