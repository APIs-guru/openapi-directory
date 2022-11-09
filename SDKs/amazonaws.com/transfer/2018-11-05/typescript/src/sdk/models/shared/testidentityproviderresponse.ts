import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestIdentityProviderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Response" })
  response?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode: number;

  @Metadata({ data: "json, name=Url" })
  url: string;
}
