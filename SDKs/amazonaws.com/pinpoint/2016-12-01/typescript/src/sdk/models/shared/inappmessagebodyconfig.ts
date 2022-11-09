import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlignmentEnum } from "./alignmentenum";


// InAppMessageBodyConfig
/** 
 * Text config for Message Body.
**/
export class InAppMessageBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alignment" })
  alignment: AlignmentEnum;

  @Metadata({ data: "json, name=Body" })
  body: string;

  @Metadata({ data: "json, name=TextColor" })
  textColor: string;
}
