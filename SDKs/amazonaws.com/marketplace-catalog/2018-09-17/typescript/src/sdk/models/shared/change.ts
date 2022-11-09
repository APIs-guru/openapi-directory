import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";


// Change
/** 
 * An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeName" })
  changeName?: string;

  @Metadata({ data: "json, name=ChangeType" })
  changeType: string;

  @Metadata({ data: "json, name=Details" })
  details: string;

  @Metadata({ data: "json, name=Entity" })
  entity: Entity;
}
