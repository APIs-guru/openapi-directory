import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemTypeEnum } from "./operatingsystemtypeenum";


// OperatingSystem
/** 
 * The operating system that the image is running.
**/
export class OperatingSystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: OperatingSystemTypeEnum;
}
