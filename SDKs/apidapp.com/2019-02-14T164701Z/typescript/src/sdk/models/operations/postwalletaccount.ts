import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWalletAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
