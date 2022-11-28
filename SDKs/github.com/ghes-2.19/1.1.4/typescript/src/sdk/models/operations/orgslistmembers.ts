import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsListMembersFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}

export enum OrgsListMembersRoleEnum {
    All = "all",
    Admin = "admin",
    Member = "member"
}


export class OrgsListMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: OrgsListMembersFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: OrgsListMembersRoleEnum;
}


export class OrgsListMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: OrgsListMembersQueryParams;
}


export class OrgsListMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
