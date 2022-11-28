import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetDashboardActionEnum {
    GetDashboard = "GetDashboard"
}

export enum GetGetDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetDashboardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetDashboardActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DashboardName" })
  dashboardName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetDashboardVersionEnum;
}


export class GetGetDashboardHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetGetDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetDashboardQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetDashboardHeaders;
}


export class GetGetDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
