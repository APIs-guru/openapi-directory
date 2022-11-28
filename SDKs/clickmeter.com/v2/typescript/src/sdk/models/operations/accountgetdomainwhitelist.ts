import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetDomainWhitelistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AccountGetDomainWhitelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountGetDomainWhitelistQueryParams;
}


export class AccountGetDomainWhitelistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
