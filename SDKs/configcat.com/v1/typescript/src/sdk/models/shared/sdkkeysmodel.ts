import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SdkKeysModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secondary" })
  secondary?: string;
}
