import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsListMembersFilterEnum {
    TwofaDisabled = "2fa_disabled"
,    All = "all"
}

export enum OrgsListMembersRoleEnum {
    All = "all"
,    Admin = "admin"
,    Member = "member"
}


export class OrgsListMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: OrgsListMembersFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: OrgsListMembersRoleEnum;
}


export class OrgsListMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListMembersPathParams;

  @Metadata()
  queryParams: OrgsListMembersQueryParams;
}


export class OrgsListMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @Metadata()
  validationError?: shared.ValidationError;
}
