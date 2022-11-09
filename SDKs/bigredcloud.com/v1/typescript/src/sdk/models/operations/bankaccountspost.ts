import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankAccountsPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankAccountDto;
}


export class BankAccountsPostResponse extends SpeakeasyBase {
  @Metadata()
  bankAccountsPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
