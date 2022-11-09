import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Token" })
  token: string;

  @Metadata({ data: "json, name=TokenProperties" })
  tokenProperties?: string[];
}
