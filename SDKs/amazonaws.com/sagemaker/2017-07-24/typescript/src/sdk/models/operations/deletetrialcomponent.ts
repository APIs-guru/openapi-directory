import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteTrialComponentXAmzTargetEnum {
    SageMakerDeleteTrialComponent = "SageMaker.DeleteTrialComponent"
}


export class DeleteTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteTrialComponentXAmzTargetEnum;
}


export class DeleteTrialComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTrialComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteTrialComponentRequest;
}


export class DeleteTrialComponentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteTrialComponentResponse?: shared.DeleteTrialComponentResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
