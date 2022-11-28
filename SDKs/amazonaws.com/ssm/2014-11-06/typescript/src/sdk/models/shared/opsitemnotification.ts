import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsItemNotification
/** 
 * A notification about the OpsItem.
**/
export class OpsItemNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
