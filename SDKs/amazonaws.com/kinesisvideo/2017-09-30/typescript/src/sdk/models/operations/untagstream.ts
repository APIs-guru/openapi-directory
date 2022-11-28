import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagStreamHeaders extends SpeakeasyBase {
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


export class UntagStreamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeyList" })
  tagKeyList: string[];
}


export class UntagStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UntagStreamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UntagStreamRequestBody;
}


export class UntagStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidResourceFormatException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  untagStreamOutput?: Map<string, any>;
}
