import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels })
  runners?: shared.RunnerNoLabels[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson;
}
