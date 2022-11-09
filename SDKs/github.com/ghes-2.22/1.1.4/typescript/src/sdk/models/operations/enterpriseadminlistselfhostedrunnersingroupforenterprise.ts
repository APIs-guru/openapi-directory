import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams;

  @Metadata()
  queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners: shared.RunnerNoLabels[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson;
}
