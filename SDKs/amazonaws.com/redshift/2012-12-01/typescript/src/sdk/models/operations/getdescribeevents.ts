import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}

export enum GetDescribeEventsSourceTypeEnum {
    Cluster = "cluster",
    ClusterParameterGroup = "cluster-parameter-group",
    ClusterSecurityGroup = "cluster-security-group",
    ClusterSnapshot = "cluster-snapshot",
    ScheduledAction = "scheduled-action"
}

export enum GetDescribeEventsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEventsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" })
  sourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: GetDescribeEventsSourceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEventsVersionEnum;
}


export class GetDescribeEventsHeaders extends SpeakeasyBase {
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


export class GetDescribeEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEventsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEventsHeaders;
}


export class GetDescribeEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
