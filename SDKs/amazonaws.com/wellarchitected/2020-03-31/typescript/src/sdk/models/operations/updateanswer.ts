import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAnswerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" })
  lensAlias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QuestionId" })
  questionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateAnswerHeaders extends SpeakeasyBase {
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

export enum UpdateAnswerRequestBodyReasonEnum {
    OutOfScope = "OUT_OF_SCOPE"
,    BusinessPriorities = "BUSINESS_PRIORITIES"
,    ArchitectureConstraints = "ARCHITECTURE_CONSTRAINTS"
,    Other = "OTHER"
,    None = "NONE"
}


export class UpdateAnswerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChoiceUpdates", elemType: shared.ChoiceUpdate })
  choiceUpdates?: Map<string, shared.ChoiceUpdate>;

  @Metadata({ data: "json, name=IsApplicable" })
  isApplicable?: boolean;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: UpdateAnswerRequestBodyReasonEnum;

  @Metadata({ data: "json, name=SelectedChoices" })
  selectedChoices?: string[];
}


export class UpdateAnswerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAnswerPathParams;

  @Metadata()
  headers: UpdateAnswerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAnswerRequestBody;
}


export class UpdateAnswerResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateAnswerOutput?: shared.UpdateAnswerOutput;

  @Metadata()
  validationException?: any;
}
