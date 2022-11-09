import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeSnapshotSchedulesActionEnum {
    DescribeSnapshotSchedules = "DescribeSnapshotSchedules"
}

export enum GetDescribeSnapshotSchedulesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeSnapshotSchedulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSnapshotSchedulesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" })
  tagValues?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSnapshotSchedulesVersionEnum;
}


export class GetDescribeSnapshotSchedulesHeaders extends SpeakeasyBase {
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


export class GetDescribeSnapshotSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeSnapshotSchedulesQueryParams;

  @Metadata()
  headers: GetDescribeSnapshotSchedulesHeaders;
}


export class GetDescribeSnapshotSchedulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
