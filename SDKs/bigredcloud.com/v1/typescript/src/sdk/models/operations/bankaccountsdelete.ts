import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BankAccountsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class BankAccountsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class BankAccountsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BankAccountsDeletePathParams;

  @Metadata()
  queryParams: BankAccountsDeleteQueryParams;
}


export class BankAccountsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  bankAccountsDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
