import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}

export enum GetDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDisableAlarmActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableAlarmActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableAlarmActionsVersionEnum;
}


export class GetDisableAlarmActionsHeaders extends SpeakeasyBase {
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


export class GetDisableAlarmActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableAlarmActionsQueryParams;

  @Metadata()
  headers: GetDisableAlarmActionsHeaders;
}


export class GetDisableAlarmActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
