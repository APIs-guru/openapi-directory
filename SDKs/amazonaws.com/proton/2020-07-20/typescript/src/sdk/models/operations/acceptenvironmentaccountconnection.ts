import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcceptEnvironmentAccountConnectionXAmzTargetEnum {
    AwsProton20200720AcceptEnvironmentAccountConnection = "AwsProton20200720.AcceptEnvironmentAccountConnection"
}


export class AcceptEnvironmentAccountConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptEnvironmentAccountConnectionXAmzTargetEnum;
}


export class AcceptEnvironmentAccountConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptEnvironmentAccountConnectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcceptEnvironmentAccountConnectionInput;
}


export class AcceptEnvironmentAccountConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptEnvironmentAccountConnectionOutput?: shared.AcceptEnvironmentAccountConnectionOutput;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
