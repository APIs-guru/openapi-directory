import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsCreateInvitationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsCreateInvitationRequestBodyRoleEnum {
    Admin = "admin"
,    DirectMember = "direct_member"
,    BillingManager = "billing_manager"
}


export class OrgsCreateInvitationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=invitee_id" })
  inviteeId?: number;

  @Metadata({ data: "json, name=role" })
  role?: OrgsCreateInvitationRequestBodyRoleEnum;

  @Metadata({ data: "json, name=team_ids" })
  teamIds?: number[];
}


export class OrgsCreateInvitationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsCreateInvitationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsCreateInvitationRequestBody;
}


export class OrgsCreateInvitationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  organizationInvitation?: shared.OrganizationInvitation;

  @Metadata()
  validationError?: shared.ValidationError;
}
