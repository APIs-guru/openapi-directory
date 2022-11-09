import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoRedirectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
