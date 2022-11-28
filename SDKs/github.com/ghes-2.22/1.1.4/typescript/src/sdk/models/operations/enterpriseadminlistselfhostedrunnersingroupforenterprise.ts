import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners: shared.RunnerNoLabels[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson;
}
