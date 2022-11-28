import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}

export enum GetSetAlarmStateStateValueEnum {
    Ok = "OK",
    Alarm = "ALARM",
    InsufficientData = "INSUFFICIENT_DATA"
}

export enum GetSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetSetAlarmStateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetAlarmStateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmName" })
  alarmName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StateReason" })
  stateReason: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StateReasonData" })
  stateReasonData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StateValue" })
  stateValue: GetSetAlarmStateStateValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetAlarmStateVersionEnum;
}


export class GetSetAlarmStateHeaders extends SpeakeasyBase {
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


export class GetSetAlarmStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetAlarmStateQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetAlarmStateHeaders;
}


export class GetSetAlarmStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
