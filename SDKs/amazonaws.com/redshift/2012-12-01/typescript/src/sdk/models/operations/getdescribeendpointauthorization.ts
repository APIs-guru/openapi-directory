import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEndpointAuthorizationActionEnum {
    DescribeEndpointAuthorization = "DescribeEndpointAuthorization"
}

export enum GetDescribeEndpointAuthorizationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeEndpointAuthorizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Account" })
  account?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEndpointAuthorizationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Grantee" })
  grantee?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEndpointAuthorizationVersionEnum;
}


export class GetDescribeEndpointAuthorizationHeaders extends SpeakeasyBase {
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


export class GetDescribeEndpointAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEndpointAuthorizationQueryParams;

  @Metadata()
  headers: GetDescribeEndpointAuthorizationHeaders;
}


export class GetDescribeEndpointAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
