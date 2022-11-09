import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;
}


export class GetContainersJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContainersJsonQueryParams;

  @Metadata()
  headers: GetContainersJsonHeaders;
}


export class GetContainersJsonResponse extends SpeakeasyBase {
  @Metadata()
  containers?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
