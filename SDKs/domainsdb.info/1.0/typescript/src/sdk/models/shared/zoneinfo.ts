import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ZoneInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string[];

  @Metadata({ data: "json, name=in_bundles" })
  inBundles?: string[];

  @Metadata({ data: "json, name=includes" })
  includes?: string[];

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=zone" })
  zone: string;
}
