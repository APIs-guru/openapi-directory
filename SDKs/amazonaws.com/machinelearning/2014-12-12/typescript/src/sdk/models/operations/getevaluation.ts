import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEvaluationXAmzTargetEnum {
    AmazonMl20141212GetEvaluation = "AmazonML_20141212.GetEvaluation"
}


export class GetEvaluationHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetEvaluationXAmzTargetEnum;
}


export class GetEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEvaluationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEvaluationInput;
}


export class GetEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEvaluationOutput?: shared.GetEvaluationOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
