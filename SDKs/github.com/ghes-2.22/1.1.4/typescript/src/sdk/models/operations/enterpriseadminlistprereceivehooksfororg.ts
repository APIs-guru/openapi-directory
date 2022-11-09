import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListPreReceiveHooksForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum EnterpriseAdminListPreReceiveHooksForOrgSortEnum {
    Created = "created"
,    Updated = "updated"
,    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListPreReceiveHooksForOrgPathParams;

  @Metadata()
  queryParams: EnterpriseAdminListPreReceiveHooksForOrgQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrgPreReceiveHook })
  orgPreReceiveHooks?: shared.OrgPreReceiveHook[];
}
