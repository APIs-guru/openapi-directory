import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateWorkloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" })
  workloadId: string;
}


export class UpdateWorkloadHeaders extends SpeakeasyBase {
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

export enum UpdateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION",
    Preproduction = "PREPRODUCTION"
}

export enum UpdateWorkloadRequestBodyImprovementStatusEnum {
    NotApplicable = "NOT_APPLICABLE",
    NotStarted = "NOT_STARTED",
    InProgress = "IN_PROGRESS",
    Complete = "COMPLETE",
    RiskAcknowledged = "RISK_ACKNOWLEDGED"
}


export class UpdateWorkloadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: UpdateWorkloadRequestBodyEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=ImprovementStatus" })
  improvementStatus?: UpdateWorkloadRequestBodyImprovementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @SpeakeasyMetadata({ data: "json, name=IsReviewOwnerUpdateAcknowledged" })
  isReviewOwnerUpdateAcknowledged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReviewOwner" })
  reviewOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}


export class UpdateWorkloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWorkloadPathParams;

  @SpeakeasyMetadata()
  headers: UpdateWorkloadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateWorkloadRequestBody;
}


export class UpdateWorkloadResponse extends SpeakeasyBase {
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
  updateWorkloadOutput?: shared.UpdateWorkloadOutput;

  @SpeakeasyMetadata()
  validationException?: any;
}
