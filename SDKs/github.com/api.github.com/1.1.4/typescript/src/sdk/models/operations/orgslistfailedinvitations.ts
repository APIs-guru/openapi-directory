import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListFailedInvitationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListFailedInvitationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListFailedInvitationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListFailedInvitationsPathParams;

  @Metadata()
  queryParams: OrgsListFailedInvitationsQueryParams;
}


export class OrgsListFailedInvitationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.OrganizationInvitation })
  organizationInvitations?: shared.OrganizationInvitation[];
}
