import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum OrgsListMembershipsForAuthenticatedUserStateEnum {
    Active = "active",
    Pending = "pending"
}


export class OrgsListMembershipsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: OrgsListMembershipsForAuthenticatedUserStateEnum;
}


export class OrgsListMembershipsForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OrgsListMembershipsForAuthenticatedUserQueryParams;
}


export class OrgsListMembershipsForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.OrgMembership })
  orgMemberships?: shared.OrgMembership[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
