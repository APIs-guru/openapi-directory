import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BankAccountsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultBankAccountQueryDto?: shared.PageResultBankAccountQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
