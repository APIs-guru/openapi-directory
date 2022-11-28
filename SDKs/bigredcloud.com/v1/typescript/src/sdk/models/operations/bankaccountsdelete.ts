import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BankAccountsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class BankAccountsDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class BankAccountsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BankAccountsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: BankAccountsDeleteQueryParams;
}


export class BankAccountsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountsDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
