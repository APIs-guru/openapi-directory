import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TokenTypeEnum } from "./tokentypeenum";


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Token" })
  token?: string;

  @Metadata({ data: "json, name=TokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=TokenType" })
  tokenType?: TokenTypeEnum;
}
