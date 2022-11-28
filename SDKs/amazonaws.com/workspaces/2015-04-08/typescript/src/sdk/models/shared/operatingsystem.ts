import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemTypeEnum } from "./operatingsystemtypeenum";



// OperatingSystem
/** 
 * The operating system that the image is running.
**/
export class OperatingSystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OperatingSystemTypeEnum;
}
