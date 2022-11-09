import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutDashboardActionEnum {
    PutDashboard = "PutDashboard"
}

export enum GetPutDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetPutDashboardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutDashboardActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DashboardBody" })
  dashboardBody: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DashboardName" })
  dashboardName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutDashboardVersionEnum;
}


export class GetPutDashboardHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetPutDashboardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutDashboardQueryParams;

  @Metadata()
  headers: GetPutDashboardHeaders;
}


export class GetPutDashboardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
