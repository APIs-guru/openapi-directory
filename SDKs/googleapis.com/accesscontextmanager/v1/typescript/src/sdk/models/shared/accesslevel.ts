import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicLevel } from "./basiclevel";
import { CustomLevel } from "./customlevel";


// AccessLevel
/** 
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export class AccessLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=basic" })
  basic?: BasicLevel;

  @Metadata({ data: "json, name=custom" })
  custom?: CustomLevel;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
