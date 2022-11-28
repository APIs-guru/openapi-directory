import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStreamHeaders extends SpeakeasyBase {
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


export class DeleteStreamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn: string;
}


export class DeleteStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteStreamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteStreamRequestBody;
}


export class DeleteStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteStreamOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMismatchException?: any;
}
