import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];
}
