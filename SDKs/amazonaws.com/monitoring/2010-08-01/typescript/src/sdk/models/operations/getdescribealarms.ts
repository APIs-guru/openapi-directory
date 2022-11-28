import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeAlarmsActionEnum {
    DescribeAlarms = "DescribeAlarms"
}

export enum GetDescribeAlarmsStateValueEnum {
    Ok = "OK",
    Alarm = "ALARM",
    InsufficientData = "INSUFFICIENT_DATA"
}

export enum GetDescribeAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDescribeAlarmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAlarmsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActionPrefix" })
  actionPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNamePrefix" })
  alarmNamePrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" })
  alarmTypes?: shared.AlarmTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChildrenOfAlarmName" })
  childrenOfAlarmName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParentsOfAlarmName" })
  parentsOfAlarmName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StateValue" })
  stateValue?: GetDescribeAlarmsStateValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAlarmsVersionEnum;
}


export class GetDescribeAlarmsHeaders extends SpeakeasyBase {
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


export class GetDescribeAlarmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeAlarmsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeAlarmsHeaders;
}


export class GetDescribeAlarmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
