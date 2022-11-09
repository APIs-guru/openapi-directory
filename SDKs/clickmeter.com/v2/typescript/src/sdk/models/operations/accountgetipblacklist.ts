import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetIpBlacklistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AccountGetIpBlacklistRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AccountGetIpBlacklistQueryParams;
}


export class AccountGetIpBlacklistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
