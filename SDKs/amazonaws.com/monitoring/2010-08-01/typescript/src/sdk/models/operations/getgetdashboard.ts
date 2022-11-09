import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetDashboardActionEnum {
    GetDashboard = "GetDashboard"
}

export enum GetGetDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetDashboardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetDashboardActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DashboardName" })
  dashboardName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetDashboardVersionEnum;
}


export class GetGetDashboardHeaders extends SpeakeasyBase {
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


export class GetGetDashboardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetDashboardQueryParams;

  @Metadata()
  headers: GetGetDashboardHeaders;
}


export class GetGetDashboardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
