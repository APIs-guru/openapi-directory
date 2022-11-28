import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicLevel } from "./basiclevel";
import { CustomLevel } from "./customlevel";



// AccessLevel
/** 
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export class AccessLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: BasicLevel;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: CustomLevel;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
