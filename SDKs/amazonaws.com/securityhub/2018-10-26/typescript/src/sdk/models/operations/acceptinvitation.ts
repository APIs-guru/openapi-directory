import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptInvitationHeaders extends SpeakeasyBase {
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
}


export class AcceptInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvitationId" })
  invitationId: string;

  @Metadata({ data: "json, name=MasterId" })
  masterId: string;
}


export class AcceptInvitationRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptInvitationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AcceptInvitationRequestBody;
}


export class AcceptInvitationResponse extends SpeakeasyBase {
  @Metadata()
  acceptInvitationResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
