import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifySnapshotScheduleActionEnum {
    ModifySnapshotSchedule = "ModifySnapshotSchedule"
}

export enum GetModifySnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifySnapshotScheduleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifySnapshotScheduleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduleDefinitions" })
  scheduleDefinitions: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifySnapshotScheduleVersionEnum;
}


export class GetModifySnapshotScheduleHeaders extends SpeakeasyBase {
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


export class GetModifySnapshotScheduleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifySnapshotScheduleQueryParams;

  @Metadata()
  headers: GetModifySnapshotScheduleHeaders;
}


export class GetModifySnapshotScheduleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
