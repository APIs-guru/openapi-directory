import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentAccountConnection = "AwsProton20200720.UpdateEnvironmentAccountConnection"
}


export class UpdateEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateEnvironmentAccountConnectionXAmzTargetEnum;
}


export class UpdateEnvironmentAccountConnectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateEnvironmentAccountConnectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateEnvironmentAccountConnectionInput;
}


export class UpdateEnvironmentAccountConnectionResponse extends SpeakeasyBase {
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
  throttlingException?: any;

  @Metadata()
  updateEnvironmentAccountConnectionOutput?: shared.UpdateEnvironmentAccountConnectionOutput;

  @Metadata()
  validationException?: any;
}
