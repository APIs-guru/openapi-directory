import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteExperimentXAmzTargetEnum {
    SageMakerDeleteExperiment = "SageMaker.DeleteExperiment"
}


export class DeleteExperimentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteExperimentXAmzTargetEnum;
}


export class DeleteExperimentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteExperimentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteExperimentRequest;
}


export class DeleteExperimentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteExperimentResponse?: shared.DeleteExperimentResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
