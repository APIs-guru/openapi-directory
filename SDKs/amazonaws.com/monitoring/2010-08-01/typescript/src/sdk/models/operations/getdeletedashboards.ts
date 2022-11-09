import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDashboardsActionEnum {
    DeleteDashboards = "DeleteDashboards"
}

export enum GetDeleteDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDeleteDashboardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDashboardsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DashboardNames" })
  dashboardNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDashboardsVersionEnum;
}


export class GetDeleteDashboardsHeaders extends SpeakeasyBase {
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


export class GetDeleteDashboardsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDashboardsQueryParams;

  @Metadata()
  headers: GetDeleteDashboardsHeaders;
}


export class GetDeleteDashboardsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
