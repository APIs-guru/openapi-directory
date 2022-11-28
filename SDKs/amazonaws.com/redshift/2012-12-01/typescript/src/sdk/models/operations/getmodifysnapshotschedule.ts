import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifySnapshotScheduleActionEnum {
    ModifySnapshotSchedule = "ModifySnapshotSchedule"
}

export enum GetModifySnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifySnapshotScheduleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifySnapshotScheduleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduleDefinitions" })
  scheduleDefinitions: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifySnapshotScheduleVersionEnum;
}


export class GetModifySnapshotScheduleHeaders extends SpeakeasyBase {
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


export class GetModifySnapshotScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifySnapshotScheduleQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifySnapshotScheduleHeaders;
}


export class GetModifySnapshotScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
