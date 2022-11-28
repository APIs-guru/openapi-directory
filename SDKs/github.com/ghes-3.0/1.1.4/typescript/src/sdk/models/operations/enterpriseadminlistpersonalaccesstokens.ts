import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListPersonalAccessTokensQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListPersonalAccessTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPersonalAccessTokensQueryParams;
}


export class EnterpriseAdminListPersonalAccessTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Authorization })
  authorizations?: shared.Authorization[];
}
