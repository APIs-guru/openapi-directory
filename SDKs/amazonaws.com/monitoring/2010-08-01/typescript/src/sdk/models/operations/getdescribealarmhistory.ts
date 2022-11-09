import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeAlarmHistoryActionEnum {
    DescribeAlarmHistory = "DescribeAlarmHistory"
}

export enum GetDescribeAlarmHistoryHistoryItemTypeEnum {
    ConfigurationUpdate = "ConfigurationUpdate"
,    StateUpdate = "StateUpdate"
,    Action = "Action"
}

export enum GetDescribeAlarmHistoryScanByEnum {
    TimestampDescending = "TimestampDescending"
,    TimestampAscending = "TimestampAscending"
}

export enum GetDescribeAlarmHistoryVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDescribeAlarmHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAlarmHistoryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmName" })
  alarmName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" })
  alarmTypes?: shared.AlarmTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HistoryItemType" })
  historyItemType?: GetDescribeAlarmHistoryHistoryItemTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScanBy" })
  scanBy?: GetDescribeAlarmHistoryScanByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAlarmHistoryVersionEnum;
}


export class GetDescribeAlarmHistoryHeaders extends SpeakeasyBase {
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


export class GetDescribeAlarmHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeAlarmHistoryQueryParams;

  @Metadata()
  headers: GetDescribeAlarmHistoryHeaders;
}


export class GetDescribeAlarmHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
