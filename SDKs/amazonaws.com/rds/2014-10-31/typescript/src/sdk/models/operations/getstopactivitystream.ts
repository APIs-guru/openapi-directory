import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStopActivityStreamActionEnum {
    StopActivityStream = "StopActivityStream"
}

export enum GetStopActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStopActivityStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStopActivityStreamActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStopActivityStreamVersionEnum;
}


export class GetStopActivityStreamHeaders extends SpeakeasyBase {
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


export class GetStopActivityStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStopActivityStreamQueryParams;

  @SpeakeasyMetadata()
  headers: GetStopActivityStreamHeaders;
}


export class GetStopActivityStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
