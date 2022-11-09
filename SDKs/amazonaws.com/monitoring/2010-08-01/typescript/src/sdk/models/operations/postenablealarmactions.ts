import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}

export enum PostEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class PostEnableAlarmActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostEnableAlarmActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostEnableAlarmActionsVersionEnum;
}


export class PostEnableAlarmActionsHeaders extends SpeakeasyBase {
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


export class PostEnableAlarmActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostEnableAlarmActionsQueryParams;

  @Metadata()
  headers: PostEnableAlarmActionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostEnableAlarmActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
