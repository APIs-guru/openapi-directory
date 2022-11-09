import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersFloatingIpsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class GetContainersFloatingIpsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersFloatingIpsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContainersFloatingIpsQueryParams;

  @Metadata()
  headers: GetContainersFloatingIpsHeaders;
}


export class GetContainersFloatingIpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  floatingIps?: any[];

  @Metadata()
  statusCode: number;
}
