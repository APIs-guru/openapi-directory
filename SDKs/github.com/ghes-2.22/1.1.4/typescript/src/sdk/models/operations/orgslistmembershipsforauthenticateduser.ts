import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum OrgsListMembershipsForAuthenticatedUserStateEnum {
    Active = "active"
,    Pending = "pending"
}


export class OrgsListMembershipsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: OrgsListMembershipsForAuthenticatedUserStateEnum;
}


export class OrgsListMembershipsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OrgsListMembershipsForAuthenticatedUserQueryParams;
}


export class OrgsListMembershipsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.OrgMembership })
  orgMemberships?: shared.OrgMembership[];

  @Metadata()
  validationError?: shared.ValidationError;
}
