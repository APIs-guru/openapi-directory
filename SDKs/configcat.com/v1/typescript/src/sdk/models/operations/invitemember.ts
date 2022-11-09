import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InviteMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class InviteMemberRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  inviteMembersRequest?: shared.InviteMembersRequest;

  @Metadata({ data: "request, media_type=application/json" })
  inviteMembersRequest1?: shared.InviteMembersRequest;

  @Metadata({ data: "request, media_type=text/json" })
  inviteMembersRequest2?: shared.InviteMembersRequest;
}


export class InviteMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InviteMemberPathParams;

  @Metadata()
  request: InviteMemberRequests;
}


export class InviteMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
