import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWalletAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
