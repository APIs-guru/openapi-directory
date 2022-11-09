import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720AcceptEnvironmentAccountConnection = "AwsProton20200720.AcceptEnvironmentAccountConnection"
}


export class AcceptEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptEnvironmentAccountConnectionXAmzTargetEnum;
}


export class AcceptEnvironmentAccountConnectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptEnvironmentAccountConnectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptEnvironmentAccountConnectionInput;
}


export class AcceptEnvironmentAccountConnectionResponse extends SpeakeasyBase {
  @Metadata()
  acceptEnvironmentAccountConnectionOutput?: shared.AcceptEnvironmentAccountConnectionOutput;

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
  validationException?: any;
}
