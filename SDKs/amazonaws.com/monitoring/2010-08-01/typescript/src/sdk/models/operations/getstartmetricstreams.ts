import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStartMetricStreamsActionEnum {
    StartMetricStreams = "StartMetricStreams"
}

export enum GetStartMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetStartMetricStreamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartMetricStreamsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Names" })
  names: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartMetricStreamsVersionEnum;
}


export class GetStartMetricStreamsHeaders extends SpeakeasyBase {
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


export class GetStartMetricStreamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStartMetricStreamsQueryParams;

  @Metadata()
  headers: GetStartMetricStreamsHeaders;
}


export class GetStartMetricStreamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
