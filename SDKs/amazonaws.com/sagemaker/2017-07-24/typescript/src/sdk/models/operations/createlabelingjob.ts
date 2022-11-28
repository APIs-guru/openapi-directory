import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateLabelingJobXAmzTargetEnum {
    SageMakerCreateLabelingJob = "SageMaker.CreateLabelingJob"
}


export class CreateLabelingJobHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateLabelingJobXAmzTargetEnum;
}


export class CreateLabelingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateLabelingJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateLabelingJobRequest;
}


export class CreateLabelingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLabelingJobResponse?: shared.CreateLabelingJobResponse;

  @SpeakeasyMetadata()
  resourceInUse?: any;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
