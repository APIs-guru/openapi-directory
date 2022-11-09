import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeclineHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128DeclineHandshake = "AWSOrganizationsV20161128.DeclineHandshake"
}


export class DeclineHandshakeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeclineHandshakeXAmzTargetEnum;
}


export class DeclineHandshakeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeclineHandshakeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeclineHandshakeRequest;
}


export class DeclineHandshakeResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  declineHandshakeResponse?: shared.DeclineHandshakeResponse;

  @Metadata()
  handshakeAlreadyInStateException?: any;

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
