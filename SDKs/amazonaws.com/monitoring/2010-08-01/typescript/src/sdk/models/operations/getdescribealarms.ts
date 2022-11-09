import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeAlarmsActionEnum {
    DescribeAlarms = "DescribeAlarms"
}

export enum GetDescribeAlarmsStateValueEnum {
    Ok = "OK"
,    Alarm = "ALARM"
,    InsufficientData = "INSUFFICIENT_DATA"
}

export enum GetDescribeAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDescribeAlarmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAlarmsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ActionPrefix" })
  actionPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNamePrefix" })
  alarmNamePrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" })
  alarmTypes?: shared.AlarmTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ChildrenOfAlarmName" })
  childrenOfAlarmName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ParentsOfAlarmName" })
  parentsOfAlarmName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StateValue" })
  stateValue?: GetDescribeAlarmsStateValueEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAlarmsVersionEnum;
}


export class GetDescribeAlarmsHeaders extends SpeakeasyBase {
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


export class GetDescribeAlarmsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeAlarmsQueryParams;

  @Metadata()
  headers: GetDescribeAlarmsHeaders;
}


export class GetDescribeAlarmsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
