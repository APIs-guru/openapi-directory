import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeUsageLimitsActionEnum {
    DescribeUsageLimits = "DescribeUsageLimits"
}

export enum GetDescribeUsageLimitsFeatureTypeEnum {
    Spectrum = "spectrum",
    ConcurrencyScaling = "concurrency-scaling"
}

export enum GetDescribeUsageLimitsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeUsageLimitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeUsageLimitsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FeatureType" })
  featureType?: GetDescribeUsageLimitsFeatureTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagValues" })
  tagValues?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" })
  usageLimitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeUsageLimitsVersionEnum;
}


export class GetDescribeUsageLimitsHeaders extends SpeakeasyBase {
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


export class GetDescribeUsageLimitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeUsageLimitsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeUsageLimitsHeaders;
}


export class GetDescribeUsageLimitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
