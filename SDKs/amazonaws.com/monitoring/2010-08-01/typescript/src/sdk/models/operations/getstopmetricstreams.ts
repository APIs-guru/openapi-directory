import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStopMetricStreamsActionEnum {
    StopMetricStreams = "StopMetricStreams"
}

export enum GetStopMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetStopMetricStreamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopMetricStreamsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Names" })
  names: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopMetricStreamsVersionEnum;
}


export class GetStopMetricStreamsHeaders extends SpeakeasyBase {
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


export class GetStopMetricStreamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStopMetricStreamsQueryParams;

  @Metadata()
  headers: GetStopMetricStreamsHeaders;
}


export class GetStopMetricStreamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
