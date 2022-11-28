import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListDashboardsActionEnum {
    ListDashboards = "ListDashboards"
}

export enum GetListDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetListDashboardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListDashboardsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DashboardNamePrefix" })
  dashboardNamePrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListDashboardsVersionEnum;
}


export class GetListDashboardsHeaders extends SpeakeasyBase {
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


export class GetListDashboardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListDashboardsQueryParams;

  @SpeakeasyMetadata()
  headers: GetListDashboardsHeaders;
}


export class GetListDashboardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
