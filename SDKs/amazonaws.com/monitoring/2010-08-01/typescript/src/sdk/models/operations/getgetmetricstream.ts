import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetMetricStreamActionEnum {
    GetMetricStream = "GetMetricStream"
}

export enum GetGetMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetGetMetricStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetMetricStreamActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetMetricStreamVersionEnum;
}


export class GetGetMetricStreamHeaders extends SpeakeasyBase {
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


export class GetGetMetricStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetMetricStreamQueryParams;

  @Metadata()
  headers: GetGetMetricStreamHeaders;
}


export class GetGetMetricStreamResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
