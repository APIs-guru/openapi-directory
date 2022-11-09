import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpeechSynthesisTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskId" })
  taskId: string;
}


export class GetSpeechSynthesisTaskHeaders extends SpeakeasyBase {
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


export class GetSpeechSynthesisTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpeechSynthesisTaskPathParams;

  @Metadata()
  headers: GetSpeechSynthesisTaskHeaders;
}


export class GetSpeechSynthesisTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSpeechSynthesisTaskOutput?: shared.GetSpeechSynthesisTaskOutput;

  @Metadata()
  invalidTaskIdException?: any;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  synthesisTaskNotFoundException?: any;
}
