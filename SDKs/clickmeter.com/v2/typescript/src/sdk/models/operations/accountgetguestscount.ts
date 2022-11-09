import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetGuestsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;
}


export class AccountGetGuestsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AccountGetGuestsCountQueryParams;
}


export class AccountGetGuestsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
