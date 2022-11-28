import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlignmentEnum } from "./alignmentenum";



// InAppMessageBodyConfig
/** 
 * Text config for Message Body.
**/
export class InAppMessageBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alignment" })
  alignment: AlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=TextColor" })
  textColor: string;
}
