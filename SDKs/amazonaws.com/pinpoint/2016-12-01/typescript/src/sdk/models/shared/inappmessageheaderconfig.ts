import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlignmentEnum } from "./alignmentenum";


// InAppMessageHeaderConfig
/** 
 * Text config for Message Header.
**/
export class InAppMessageHeaderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alignment" })
  alignment: AlignmentEnum;

  @Metadata({ data: "json, name=Header" })
  header: string;

  @Metadata({ data: "json, name=TextColor" })
  textColor: string;
}
