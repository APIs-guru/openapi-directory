import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InviteMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class InviteMemberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  inviteMembersRequest?: shared.InviteMembersRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  inviteMembersRequest1?: shared.InviteMembersRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  inviteMembersRequest2?: shared.InviteMembersRequest;
}


export class InviteMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InviteMemberPathParams;

  @SpeakeasyMetadata()
  request: InviteMemberRequests;
}


export class InviteMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
