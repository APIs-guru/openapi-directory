import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListPersonalAccessTokensQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListPersonalAccessTokensRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EnterpriseAdminListPersonalAccessTokensQueryParams;
}


export class EnterpriseAdminListPersonalAccessTokensResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Authorization })
  authorizations?: shared.Authorization[];
}
