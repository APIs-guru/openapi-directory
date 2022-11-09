import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetDomainWhitelistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AccountGetDomainWhitelistRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AccountGetDomainWhitelistQueryParams;
}


export class AccountGetDomainWhitelistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
