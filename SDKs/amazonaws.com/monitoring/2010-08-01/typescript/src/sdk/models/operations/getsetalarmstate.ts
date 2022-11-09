import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}

export enum GetSetAlarmStateStateValueEnum {
    Ok = "OK"
,    Alarm = "ALARM"
,    InsufficientData = "INSUFFICIENT_DATA"
}

export enum GetSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetSetAlarmStateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetAlarmStateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmName" })
  alarmName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StateReason" })
  stateReason: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StateReasonData" })
  stateReasonData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StateValue" })
  stateValue: GetSetAlarmStateStateValueEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetAlarmStateVersionEnum;
}


export class GetSetAlarmStateHeaders extends SpeakeasyBase {
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


export class GetSetAlarmStateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetAlarmStateQueryParams;

  @Metadata()
  headers: GetSetAlarmStateHeaders;
}


export class GetSetAlarmStateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
