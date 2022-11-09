import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account_id" })
  accountId: number;
}


export class GetAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountPathParams;

  @Metadata()
  queryParams: GetAccountQueryParams;
}


export class GetAccountResponse extends SpeakeasyBase {
  @Metadata()
  accountDetail?: shared.AccountDetail;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
