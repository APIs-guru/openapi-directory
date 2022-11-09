import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStopActivityStreamActionEnum {
    StopActivityStream = "StopActivityStream"
}

export enum GetStopActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStopActivityStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopActivityStreamActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopActivityStreamVersionEnum;
}


export class GetStopActivityStreamHeaders extends SpeakeasyBase {
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


export class GetStopActivityStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStopActivityStreamQueryParams;

  @Metadata()
  headers: GetStopActivityStreamHeaders;
}


export class GetStopActivityStreamResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
