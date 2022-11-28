import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Alias extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;
}
