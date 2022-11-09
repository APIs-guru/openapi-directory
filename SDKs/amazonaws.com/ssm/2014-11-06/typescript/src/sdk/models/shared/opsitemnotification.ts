import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsItemNotification
/** 
 * A notification about the OpsItem.
**/
export class OpsItemNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
