import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;

  @Metadata()
  queryParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=organizations", elemType: shared.OrganizationSimple })
  organizations: shared.OrganizationSimple[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson;
}
