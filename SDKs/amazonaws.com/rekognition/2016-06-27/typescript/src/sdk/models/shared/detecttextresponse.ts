import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextDetection } from "./textdetection";



export class DetectTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TextDetections", elemType: TextDetection })
  textDetections?: TextDetection[];

  @SpeakeasyMetadata({ data: "json, name=TextModelVersion" })
  textModelVersion?: string;
}
