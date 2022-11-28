import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWorkloadHeaders extends SpeakeasyBase {
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

export enum CreateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION",
    Preproduction = "PREPRODUCTION"
}


export class CreateWorkloadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @SpeakeasyMetadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment: CreateWorkloadRequestBodyEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=Industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @SpeakeasyMetadata({ data: "json, name=Lenses" })
  lenses: string[];

  @SpeakeasyMetadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReviewOwner" })
  reviewOwner: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName: string;
}


export class CreateWorkloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWorkloadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateWorkloadRequestBody;
}


export class CreateWorkloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWorkloadOutput?: shared.CreateWorkloadOutput;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
