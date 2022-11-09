import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1BankAccountsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1BankAccountsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1BankAccountsIdPathParams;
}


export class GetV1BankAccountsIdResponse extends SpeakeasyBase {
  @Metadata()
  bankAccountDto?: shared.BankAccountDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
