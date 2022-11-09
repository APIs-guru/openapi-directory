import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTrainingJobXAmzTargetEnum {
    SageMakerUpdateTrainingJob = "SageMaker.UpdateTrainingJob"
}


export class UpdateTrainingJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTrainingJobXAmzTargetEnum;
}


export class UpdateTrainingJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTrainingJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTrainingJobRequest;
}


export class UpdateTrainingJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTrainingJobResponse?: shared.UpdateTrainingJobResponse;
}
