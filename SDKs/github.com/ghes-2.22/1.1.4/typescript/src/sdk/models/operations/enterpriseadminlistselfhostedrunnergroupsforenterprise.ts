import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams;

  @Metadata()
  queryParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsEnterprise })
  runnerGroups: shared.RunnerGroupsEnterprise[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson;
}
