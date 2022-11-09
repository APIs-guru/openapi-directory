import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geometry } from "./geometry";


// CustomLabel
/** 
 * A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
**/
export class CustomLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Geometry" })
  geometry?: Geometry;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
