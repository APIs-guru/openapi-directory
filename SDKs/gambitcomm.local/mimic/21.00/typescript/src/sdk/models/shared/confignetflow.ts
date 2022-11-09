import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigNetflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleflowsets" })
  bundleflowsets?: number;

  @Metadata({ data: "json, name=collector" })
  collector?: string;

  @Metadata({ data: "json, name=collectorport" })
  collectorport?: number;

  @Metadata({ data: "json, name=filename" })
  filename?: string;
}
