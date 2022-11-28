import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_id" })
  accountId: number;
}


export class GetAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountQueryParams;
}


export class GetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountDetail?: shared.AccountDetail;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
