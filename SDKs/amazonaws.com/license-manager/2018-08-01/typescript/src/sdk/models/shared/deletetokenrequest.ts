import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TokenId" })
  tokenId: string;
}
