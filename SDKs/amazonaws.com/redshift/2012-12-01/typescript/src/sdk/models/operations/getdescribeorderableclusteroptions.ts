import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeOrderableClusterOptionsActionEnum {
    DescribeOrderableClusterOptions = "DescribeOrderableClusterOptions"
}

export enum GetDescribeOrderableClusterOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeOrderableClusterOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeOrderableClusterOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" })
  clusterVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeOrderableClusterOptionsVersionEnum;
}


export class GetDescribeOrderableClusterOptionsHeaders extends SpeakeasyBase {
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


export class GetDescribeOrderableClusterOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeOrderableClusterOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeOrderableClusterOptionsHeaders;
}


export class GetDescribeOrderableClusterOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
