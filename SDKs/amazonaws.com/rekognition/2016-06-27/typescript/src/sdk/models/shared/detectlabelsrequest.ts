import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class DetectLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=MaxLabels" })
  maxLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}
