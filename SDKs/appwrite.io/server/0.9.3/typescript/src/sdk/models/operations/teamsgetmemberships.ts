import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsGetMembershipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsGetMembershipsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderType" })
  orderType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class TeamsGetMembershipsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsGetMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsGetMembershipsPathParams;

  @Metadata()
  queryParams: TeamsGetMembershipsQueryParams;

  @Metadata()
  security: TeamsGetMembershipsSecurity;
}


export class TeamsGetMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  membershipList?: shared.MembershipList;
}
