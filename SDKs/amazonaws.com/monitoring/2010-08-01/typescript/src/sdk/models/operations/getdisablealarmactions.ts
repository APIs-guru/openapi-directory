import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}

export enum GetDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDisableAlarmActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableAlarmActionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableAlarmActionsVersionEnum;
}


export class GetDisableAlarmActionsHeaders extends SpeakeasyBase {
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


export class GetDisableAlarmActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisableAlarmActionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisableAlarmActionsHeaders;
}


export class GetDisableAlarmActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
