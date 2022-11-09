import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopHumanLoopHeaders extends SpeakeasyBase {
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


export class StopHumanLoopRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;
}


export class StopHumanLoopRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopHumanLoopHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StopHumanLoopRequestBody;
}


export class StopHumanLoopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopHumanLoopResponse?: Map<string, any>;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
