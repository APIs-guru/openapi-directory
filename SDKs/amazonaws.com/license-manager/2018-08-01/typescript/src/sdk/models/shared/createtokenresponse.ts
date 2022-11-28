import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TokenTypeEnum } from "./tokentypeenum";



export class CreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenType" })
  tokenType?: TokenTypeEnum;
}
