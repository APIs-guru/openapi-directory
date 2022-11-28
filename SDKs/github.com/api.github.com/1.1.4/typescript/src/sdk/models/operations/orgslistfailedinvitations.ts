import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListFailedInvitationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListFailedInvitationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListFailedInvitationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListFailedInvitationsPathParams;

  @SpeakeasyMetadata()
  queryParams: OrgsListFailedInvitationsQueryParams;
}


export class OrgsListFailedInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.OrganizationInvitation })
  organizationInvitations?: shared.OrganizationInvitation[];
}
