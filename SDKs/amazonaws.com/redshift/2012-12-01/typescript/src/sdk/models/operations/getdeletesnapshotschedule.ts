import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteSnapshotScheduleActionEnum {
    DeleteSnapshotSchedule = "DeleteSnapshotSchedule"
}

export enum GetDeleteSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteSnapshotScheduleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSnapshotScheduleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduleIdentifier" })
  scheduleIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSnapshotScheduleVersionEnum;
}


export class GetDeleteSnapshotScheduleHeaders extends SpeakeasyBase {
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


export class GetDeleteSnapshotScheduleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteSnapshotScheduleQueryParams;

  @Metadata()
  headers: GetDeleteSnapshotScheduleHeaders;
}


export class GetDeleteSnapshotScheduleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
