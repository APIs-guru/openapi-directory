import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: shared.OrganizationSimple })
  organizations: shared.OrganizationSimple[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}


export class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson;
}
