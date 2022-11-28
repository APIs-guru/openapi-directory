import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigNetflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleflowsets" })
  bundleflowsets?: number;

  @SpeakeasyMetadata({ data: "json, name=collector" })
  collector?: string;

  @SpeakeasyMetadata({ data: "json, name=collectorport" })
  collectorport?: number;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;
}
