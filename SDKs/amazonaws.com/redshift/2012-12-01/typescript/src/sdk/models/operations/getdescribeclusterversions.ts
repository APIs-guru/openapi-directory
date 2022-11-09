import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeClusterVersionsActionEnum {
    DescribeClusterVersions = "DescribeClusterVersions"
}

export enum GetDescribeClusterVersionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeClusterVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeClusterVersionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupFamily" })
  clusterParameterGroupFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" })
  clusterVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeClusterVersionsVersionEnum;
}


export class GetDescribeClusterVersionsHeaders extends SpeakeasyBase {
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


export class GetDescribeClusterVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeClusterVersionsQueryParams;

  @Metadata()
  headers: GetDescribeClusterVersionsHeaders;
}


export class GetDescribeClusterVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
