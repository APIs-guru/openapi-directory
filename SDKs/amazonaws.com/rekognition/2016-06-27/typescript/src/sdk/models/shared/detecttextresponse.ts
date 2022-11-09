import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextDetection } from "./textdetection";


export class DetectTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TextDetections", elemType: shared.TextDetection })
  textDetections?: TextDetection[];

  @Metadata({ data: "json, name=TextModelVersion" })
  textModelVersion?: string;
}
