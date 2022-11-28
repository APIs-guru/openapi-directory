import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SDKKeysModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary?: string;
}
