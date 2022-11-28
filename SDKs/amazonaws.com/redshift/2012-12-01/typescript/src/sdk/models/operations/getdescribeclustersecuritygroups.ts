import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeClusterSecurityGroupsActionEnum {
    DescribeClusterSecurityGroups = "DescribeClusterSecurityGroups"
}

export enum GetDescribeClusterSecurityGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeClusterSecurityGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeClusterSecurityGroupsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" })
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagValues" })
  tagValues?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeClusterSecurityGroupsVersionEnum;
}


export class GetDescribeClusterSecurityGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeClusterSecurityGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeClusterSecurityGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeClusterSecurityGroupsHeaders;
}


export class GetDescribeClusterSecurityGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
