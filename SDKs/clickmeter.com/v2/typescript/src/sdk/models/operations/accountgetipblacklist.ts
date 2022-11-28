import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetIpBlacklistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AccountGetIpBlacklistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountGetIpBlacklistQueryParams;
}


export class AccountGetIpBlacklistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
