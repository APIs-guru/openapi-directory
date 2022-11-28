import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoRedirectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
