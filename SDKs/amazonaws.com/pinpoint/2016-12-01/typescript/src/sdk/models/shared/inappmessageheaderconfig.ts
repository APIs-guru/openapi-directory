import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlignmentEnum } from "./alignmentenum";



// InAppMessageHeaderConfig
/** 
 * Text config for Message Header.
**/
export class InAppMessageHeaderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alignment" })
  alignment: AlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=Header" })
  header: string;

  @SpeakeasyMetadata({ data: "json, name=TextColor" })
  textColor: string;
}
