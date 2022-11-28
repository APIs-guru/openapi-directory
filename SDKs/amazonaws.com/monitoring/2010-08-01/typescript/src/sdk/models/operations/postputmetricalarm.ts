import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPutMetricAlarmActionEnum {
    PutMetricAlarm = "PutMetricAlarm"
}

export enum PostPutMetricAlarmVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class PostPutMetricAlarmQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPutMetricAlarmActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPutMetricAlarmVersionEnum;
}


export class PostPutMetricAlarmHeaders extends SpeakeasyBase {
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


export class PostPutMetricAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPutMetricAlarmQueryParams;

  @SpeakeasyMetadata()
  headers: PostPutMetricAlarmHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPutMetricAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
