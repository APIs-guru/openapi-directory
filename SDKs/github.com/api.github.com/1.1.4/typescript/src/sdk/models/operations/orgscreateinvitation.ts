import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsCreateInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsCreateInvitationRequestBodyRoleEnum {
    Admin = "admin",
    DirectMember = "direct_member",
    BillingManager = "billing_manager"
}


export class OrgsCreateInvitationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=invitee_id" })
  inviteeId?: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: OrgsCreateInvitationRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=team_ids" })
  teamIds?: number[];
}


export class OrgsCreateInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsCreateInvitationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsCreateInvitationRequestBody;
}


export class OrgsCreateInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  organizationInvitation?: shared.OrganizationInvitation;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
