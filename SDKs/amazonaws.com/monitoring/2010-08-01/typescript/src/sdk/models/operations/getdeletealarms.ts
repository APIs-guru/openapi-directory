import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteAlarmsActionEnum {
    DeleteAlarms = "DeleteAlarms"
}

export enum GetDeleteAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDeleteAlarmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAlarmsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAlarmsVersionEnum;
}


export class GetDeleteAlarmsHeaders extends SpeakeasyBase {
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


export class GetDeleteAlarmsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteAlarmsQueryParams;

  @Metadata()
  headers: GetDeleteAlarmsHeaders;
}


export class GetDeleteAlarmsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
