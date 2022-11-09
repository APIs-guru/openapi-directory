import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppEdit
/** 
 * An app edit. The resource for EditsService.
**/
export class AppEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiryTimeSeconds" })
  expiryTimeSeconds?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
