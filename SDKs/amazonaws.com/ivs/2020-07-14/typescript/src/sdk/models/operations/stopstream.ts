import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopStreamHeaders extends SpeakeasyBase {
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


export class StopStreamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelArn" })
  channelArn: string;
}


export class StopStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StopStreamRequestBody;
}


export class StopStreamResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  channelNotBroadcasting?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopStreamResponse?: Map<string, any>;

  @Metadata()
  streamUnavailable?: any;

  @Metadata()
  validationException?: any;
}
