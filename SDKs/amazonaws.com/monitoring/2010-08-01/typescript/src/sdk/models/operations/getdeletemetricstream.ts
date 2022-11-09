import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteMetricStreamActionEnum {
    DeleteMetricStream = "DeleteMetricStream"
}

export enum GetDeleteMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}


export class GetDeleteMetricStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteMetricStreamActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteMetricStreamVersionEnum;
}


export class GetDeleteMetricStreamHeaders extends SpeakeasyBase {
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


export class GetDeleteMetricStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteMetricStreamQueryParams;

  @Metadata()
  headers: GetDeleteMetricStreamHeaders;
}


export class GetDeleteMetricStreamResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
