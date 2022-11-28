import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;
}
