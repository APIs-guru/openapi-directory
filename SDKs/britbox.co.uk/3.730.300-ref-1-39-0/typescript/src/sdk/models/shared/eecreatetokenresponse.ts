import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeCreateTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @Metadata({ data: "json, name=tokenType" })
  tokenType?: string;
}
