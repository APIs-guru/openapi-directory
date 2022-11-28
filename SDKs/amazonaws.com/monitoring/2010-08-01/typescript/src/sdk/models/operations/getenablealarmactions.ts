import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}

export enum GetEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetEnableAlarmActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableAlarmActionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" })
  alarmNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableAlarmActionsVersionEnum;
}


export class GetEnableAlarmActionsHeaders extends SpeakeasyBase {
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


export class GetEnableAlarmActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnableAlarmActionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnableAlarmActionsHeaders;
}


export class GetEnableAlarmActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
