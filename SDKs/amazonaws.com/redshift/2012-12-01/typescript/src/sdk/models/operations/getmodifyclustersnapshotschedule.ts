import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}

export enum GetModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterSnapshotScheduleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterSnapshotScheduleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DisassociateSchedule" })
  disassociateSchedule?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterSnapshotScheduleVersionEnum;
}


export class GetModifyClusterSnapshotScheduleHeaders extends SpeakeasyBase {
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


export class GetModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyClusterSnapshotScheduleQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyClusterSnapshotScheduleHeaders;
}


export class GetModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
