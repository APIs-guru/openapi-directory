import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStopMetricStreamsActionEnum {
    StopMetricStreams = "StopMetricStreams"
}

export enum GetStopMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetStopMetricStreamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopMetricStreamsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Names" })
  names: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopMetricStreamsVersionEnum;
}


export class GetStopMetricStreamsHeaders extends SpeakeasyBase {
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


export class GetStopMetricStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStopMetricStreamsQueryParams;

  @SpeakeasyMetadata()
  headers: GetStopMetricStreamsHeaders;
}


export class GetStopMetricStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
