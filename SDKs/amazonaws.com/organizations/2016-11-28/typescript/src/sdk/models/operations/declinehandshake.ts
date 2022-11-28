import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeclineHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128DeclineHandshake = "AWSOrganizationsV20161128.DeclineHandshake"
}


export class DeclineHandshakeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeclineHandshakeXAmzTargetEnum;
}


export class DeclineHandshakeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeclineHandshakeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeclineHandshakeRequest;
}


export class DeclineHandshakeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  declineHandshakeResponse?: shared.DeclineHandshakeResponse;

  @SpeakeasyMetadata()
  handshakeAlreadyInStateException?: any;

  @SpeakeasyMetadata()
  handshakeNotFoundException?: any;

  @SpeakeasyMetadata()
  invalidHandshakeTransitionException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
