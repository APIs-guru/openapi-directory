import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLabelingJobXAmzTargetEnum {
    SageMakerCreateLabelingJob = "SageMaker.CreateLabelingJob"
}


export class CreateLabelingJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLabelingJobXAmzTargetEnum;
}


export class CreateLabelingJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLabelingJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLabelingJobRequest;
}


export class CreateLabelingJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLabelingJobResponse?: shared.CreateLabelingJobResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
