import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultAccountDto?: shared.PageResultAccountDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
