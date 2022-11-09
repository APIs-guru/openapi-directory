import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128AcceptHandshake = "AWSOrganizationsV20161128.AcceptHandshake"
}


export class AcceptHandshakeHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptHandshakeXAmzTargetEnum;
}


export class AcceptHandshakeRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptHandshakeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptHandshakeRequest;
}


export class AcceptHandshakeResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  acceptHandshakeResponse?: shared.AcceptHandshakeResponse;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accessDeniedForDependencyException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  handshakeAlreadyInStateException?: any;

  @Metadata()
  handshakeConstraintViolationException?: any;

  @Metadata()
  handshakeNotFoundException?: any;

  @Metadata()
  invalidHandshakeTransitionException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
