import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWorkloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateWorkloadHeaders extends SpeakeasyBase {
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

export enum UpdateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION"
,    Preproduction = "PREPRODUCTION"
}

export enum UpdateWorkloadRequestBodyImprovementStatusEnum {
    NotApplicable = "NOT_APPLICABLE"
,    NotStarted = "NOT_STARTED"
,    InProgress = "IN_PROGRESS"
,    Complete = "COMPLETE"
,    RiskAcknowledged = "RISK_ACKNOWLEDGED"
}


export class UpdateWorkloadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @Metadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: UpdateWorkloadRequestBodyEnvironmentEnum;

  @Metadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: UpdateWorkloadRequestBodyImprovementStatusEnum;

  @Metadata({ data: "json, name=Industry" })
  industry?: string;

  @Metadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @Metadata({ data: "json, name=IsReviewOwnerUpdateAcknowledged" })
  isReviewOwnerUpdateAcknowledged?: boolean;

  @Metadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @Metadata({ data: "json, name=ReviewOwner" })
  reviewOwner?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}


export class UpdateWorkloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkloadPathParams;

  @Metadata()
  headers: UpdateWorkloadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateWorkloadRequestBody;
}


export class UpdateWorkloadResponse extends SpeakeasyBase {
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
  updateWorkloadOutput?: shared.UpdateWorkloadOutput;

  @Metadata()
  validationException?: any;
}
