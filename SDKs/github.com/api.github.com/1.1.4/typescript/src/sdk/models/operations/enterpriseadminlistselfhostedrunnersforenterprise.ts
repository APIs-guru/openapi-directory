import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams;

  @Metadata()
  queryParams: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners", elemType: shared.Runner })
  runners?: shared.Runner[];

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}


export class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson;
}
