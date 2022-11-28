import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GzipConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
