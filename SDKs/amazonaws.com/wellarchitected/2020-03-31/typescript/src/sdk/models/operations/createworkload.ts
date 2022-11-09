import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWorkloadHeaders extends SpeakeasyBase {
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

export enum CreateWorkloadRequestBodyEnvironmentEnum {
    Production = "PRODUCTION"
,    Preproduction = "PREPRODUCTION"
}


export class CreateWorkloadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=ArchitecturalDesign" })
  architecturalDesign?: string;

  @Metadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Environment" })
  environment: CreateWorkloadRequestBodyEnvironmentEnum;

  @Metadata({ data: "json, name=Industry" })
  industry?: string;

  @Metadata({ data: "json, name=IndustryType" })
  industryType?: string;

  @Metadata({ data: "json, name=Lenses" })
  lenses: string[];

  @Metadata({ data: "json, name=NonAwsRegions" })
  nonAwsRegions?: string[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PillarPriorities" })
  pillarPriorities?: string[];

  @Metadata({ data: "json, name=ReviewOwner" })
  reviewOwner: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName: string;
}


export class CreateWorkloadRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWorkloadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateWorkloadRequestBody;
}


export class CreateWorkloadResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createWorkloadOutput?: shared.CreateWorkloadOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
