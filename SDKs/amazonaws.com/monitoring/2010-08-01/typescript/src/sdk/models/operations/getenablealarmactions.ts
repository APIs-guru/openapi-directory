import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}

export enum GetEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetEnableAlarmActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableAlarmActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableAlarmActionsVersionEnum;
}


export class GetEnableAlarmActionsHeaders extends SpeakeasyBase {
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


export class GetEnableAlarmActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableAlarmActionsQueryParams;

  @Metadata()
  headers: GetEnableAlarmActionsHeaders;
}


export class GetEnableAlarmActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
