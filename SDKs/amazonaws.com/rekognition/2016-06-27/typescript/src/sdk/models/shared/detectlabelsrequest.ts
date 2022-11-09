import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class DetectLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=MaxLabels" })
  maxLabels?: number;

  @Metadata({ data: "json, name=MinConfidence" })
  minConfidence?: number;
}
