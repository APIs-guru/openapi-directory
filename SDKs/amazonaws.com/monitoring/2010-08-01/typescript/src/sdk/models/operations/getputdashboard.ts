import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutDashboardActionEnum {
    PutDashboard = "PutDashboard"
}

export enum GetPutDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetPutDashboardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutDashboardActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DashboardBody" })
  dashboardBody: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DashboardName" })
  dashboardName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutDashboardVersionEnum;
}


export class GetPutDashboardHeaders extends SpeakeasyBase {
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


export class GetPutDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutDashboardQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutDashboardHeaders;
}


export class GetPutDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
