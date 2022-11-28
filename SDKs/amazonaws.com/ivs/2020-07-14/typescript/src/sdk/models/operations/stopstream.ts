import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopStreamHeaders extends SpeakeasyBase {
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


export class StopStreamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn: string;
}


export class StopStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopStreamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StopStreamRequestBody;
}


export class StopStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  channelNotBroadcasting?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopStreamResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  streamUnavailable?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
