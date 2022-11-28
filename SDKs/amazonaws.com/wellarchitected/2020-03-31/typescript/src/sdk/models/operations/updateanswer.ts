import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAnswerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" })
  lensAlias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QuestionId" })
  questionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateAnswerHeaders extends SpeakeasyBase {
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

export enum UpdateAnswerRequestBodyReasonEnum {
    OutOfScope = "OUT_OF_SCOPE",
    BusinessPriorities = "BUSINESS_PRIORITIES",
    ArchitectureConstraints = "ARCHITECTURE_CONSTRAINTS",
    Other = "OTHER",
    None = "NONE"
}


export class UpdateAnswerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChoiceUpdates", elemType: shared.ChoiceUpdate })
  choiceUpdates?: Map<string, shared.ChoiceUpdate>;

  @SpeakeasyMetadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: UpdateAnswerRequestBodyReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=SelectedChoices" })
  selectedChoices?: string[];
}


export class UpdateAnswerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAnswerPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAnswerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAnswerRequestBody;
}


export class UpdateAnswerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateAnswerOutput?: shared.UpdateAnswerOutput;

  @SpeakeasyMetadata()
  validationException?: any;
}
