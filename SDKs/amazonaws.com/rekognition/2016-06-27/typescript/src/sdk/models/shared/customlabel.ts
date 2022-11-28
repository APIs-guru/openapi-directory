import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";



// CustomLabel
/** 
 * A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
**/
export class CustomLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry?: Geometry;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
