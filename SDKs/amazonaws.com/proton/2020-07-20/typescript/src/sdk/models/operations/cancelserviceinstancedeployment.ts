import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelServiceInstanceDeploymentXAmzTargetEnum {
    AwsProton20200720CancelServiceInstanceDeployment = "AwsProton20200720.CancelServiceInstanceDeployment"
}


export class CancelServiceInstanceDeploymentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelServiceInstanceDeploymentXAmzTargetEnum;
}


export class CancelServiceInstanceDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelServiceInstanceDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelServiceInstanceDeploymentInput;
}


export class CancelServiceInstanceDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  cancelServiceInstanceDeploymentOutput?: shared.CancelServiceInstanceDeploymentOutput;

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
  validationException?: any;
}
