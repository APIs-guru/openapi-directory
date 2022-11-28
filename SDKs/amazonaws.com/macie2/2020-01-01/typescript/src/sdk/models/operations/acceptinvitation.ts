import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptInvitationHeaders extends SpeakeasyBase {
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
}


export class AcceptInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administratorAccountId" })
  administratorAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId: string;

  @SpeakeasyMetadata({ data: "json, name=masterAccount" })
  masterAccount?: string;
}


export class AcceptInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptInvitationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AcceptInvitationRequestBody;
}


export class AcceptInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptInvitationResponse?: Map<string, any>;

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
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
