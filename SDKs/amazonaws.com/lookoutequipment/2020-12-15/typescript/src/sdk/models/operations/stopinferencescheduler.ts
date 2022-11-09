import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceStopInferenceScheduler = "AWSLookoutEquipmentFrontendService.StopInferenceScheduler"
}


export class StopInferenceSchedulerHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopInferenceSchedulerXAmzTargetEnum;
}


export class StopInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopInferenceSchedulerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopInferenceSchedulerRequest;
}


export class StopInferenceSchedulerResponse extends SpeakeasyBase {
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
  stopInferenceSchedulerResponse?: shared.StopInferenceSchedulerResponse;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
