import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ZoneInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=in_bundles" })
  inBundles?: string[];

  @SpeakeasyMetadata({ data: "json, name=includes" })
  includes?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone: string;
}
