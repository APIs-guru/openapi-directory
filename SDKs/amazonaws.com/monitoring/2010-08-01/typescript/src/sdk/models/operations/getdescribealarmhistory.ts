import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeAlarmHistoryActionEnum {
    DescribeAlarmHistory = "DescribeAlarmHistory"
}

export enum GetDescribeAlarmHistoryHistoryItemTypeEnum {
    ConfigurationUpdate = "ConfigurationUpdate",
    StateUpdate = "StateUpdate",
    Action = "Action"
}

export enum GetDescribeAlarmHistoryScanByEnum {
    TimestampDescending = "TimestampDescending",
    TimestampAscending = "TimestampAscending"
}

export enum GetDescribeAlarmHistoryVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDescribeAlarmHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAlarmHistoryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmName" })
  alarmName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" })
  alarmTypes?: shared.AlarmTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HistoryItemType" })
  historyItemType?: GetDescribeAlarmHistoryHistoryItemTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScanBy" })
  scanBy?: GetDescribeAlarmHistoryScanByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAlarmHistoryVersionEnum;
}


export class GetDescribeAlarmHistoryHeaders extends SpeakeasyBase {
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


export class GetDescribeAlarmHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeAlarmHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeAlarmHistoryHeaders;
}


export class GetDescribeAlarmHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
