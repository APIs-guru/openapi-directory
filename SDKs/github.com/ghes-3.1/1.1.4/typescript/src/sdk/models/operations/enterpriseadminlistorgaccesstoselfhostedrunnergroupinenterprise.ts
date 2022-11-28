import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: shared.OrganizationSimple })
  organizations: shared.OrganizationSimple[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}


export class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJsonObject?: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson;
}
