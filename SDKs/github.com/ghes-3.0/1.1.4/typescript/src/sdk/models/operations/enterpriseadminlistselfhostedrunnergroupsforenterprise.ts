import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runner_groups", elemType: shared.RunnerGroupsEnterprise })
  runnerGroups: shared.RunnerGroupsEnterprise[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson;
}
