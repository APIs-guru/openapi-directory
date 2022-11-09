import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanLoopConfig } from "./humanloopconfig";
import { Image } from "./image";


export class DetectModerationLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopConfig" })
  humanLoopConfig?: HumanLoopConfig;

  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}
