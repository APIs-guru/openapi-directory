import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptAdministratorInvitationHeaders extends SpeakeasyBase {
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


export class AcceptAdministratorInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdministratorId" })
  administratorId: string;

  @SpeakeasyMetadata({ data: "json, name=InvitationId" })
  invitationId: string;
}


export class AcceptAdministratorInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptAdministratorInvitationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AcceptAdministratorInvitationRequestBody;
}


export class AcceptAdministratorInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptAdministratorInvitationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
