import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListInvitationTeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invitation_id" })
  invitationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListInvitationTeamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListInvitationTeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListInvitationTeamsPathParams;

  @Metadata()
  queryParams: OrgsListInvitationTeamsQueryParams;
}


export class OrgsListInvitationTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
