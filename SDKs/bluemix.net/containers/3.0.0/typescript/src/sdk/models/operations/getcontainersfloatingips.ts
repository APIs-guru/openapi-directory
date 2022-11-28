import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersFloatingIpsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class GetContainersFloatingIpsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersFloatingIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContainersFloatingIpsQueryParams;

  @SpeakeasyMetadata()
  headers: GetContainersFloatingIpsHeaders;
}


export class GetContainersFloatingIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  floatingIps?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
