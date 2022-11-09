import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListPendingInvitationsLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsListPendingInvitationsLegacyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListPendingInvitationsLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListPendingInvitationsLegacyPathParams;

  @Metadata()
  queryParams: TeamsListPendingInvitationsLegacyQueryParams;
}


export class TeamsListPendingInvitationsLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrganizationInvitation })
  organizationInvitations?: shared.OrganizationInvitation[];
}
