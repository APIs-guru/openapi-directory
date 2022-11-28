import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEdit
/** 
 * An app edit. The resource for EditsService.
**/
export class AppEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiryTimeSeconds" })
  expiryTimeSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
