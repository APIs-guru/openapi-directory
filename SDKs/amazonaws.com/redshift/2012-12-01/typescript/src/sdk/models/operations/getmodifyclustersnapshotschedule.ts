import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}

export enum GetModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterSnapshotScheduleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterSnapshotScheduleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DisassociateSchedule" })
  disassociateSchedule?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterSnapshotScheduleVersionEnum;
}


export class GetModifyClusterSnapshotScheduleHeaders extends SpeakeasyBase {
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


export class GetModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyClusterSnapshotScheduleQueryParams;

  @Metadata()
  headers: GetModifyClusterSnapshotScheduleHeaders;
}


export class GetModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
