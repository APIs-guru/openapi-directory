import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestIdentityProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url: string;
}
