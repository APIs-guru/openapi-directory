import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TokenId" })
  tokenId: string;
}
