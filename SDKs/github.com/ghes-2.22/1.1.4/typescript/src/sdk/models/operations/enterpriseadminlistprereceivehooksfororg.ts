import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListPreReceiveHooksForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum EnterpriseAdminListPreReceiveHooksForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListPreReceiveHooksForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPreReceiveHooksForOrgQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.OrgPreReceiveHook })
  orgPreReceiveHooks?: shared.OrgPreReceiveHook[];
}
