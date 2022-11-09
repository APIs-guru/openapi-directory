import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankAccountsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultBankAccountQueryDto?: shared.PageResultBankAccountQueryDto;

  @Metadata()
  statusCode: number;
}
