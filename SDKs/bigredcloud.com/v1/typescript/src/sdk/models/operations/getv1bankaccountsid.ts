import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1BankAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1BankAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1BankAccountsIdPathParams;
}


export class GetV1BankAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountDto?: shared.BankAccountDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
