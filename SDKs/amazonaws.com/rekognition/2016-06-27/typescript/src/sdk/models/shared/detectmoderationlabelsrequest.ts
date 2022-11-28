import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopConfig } from "./humanloopconfig";
import { Image } from "./image";



export class DetectModerationLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig?: HumanLoopConfig;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}
