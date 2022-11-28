import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
