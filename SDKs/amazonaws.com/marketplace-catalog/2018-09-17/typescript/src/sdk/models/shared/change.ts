import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// Change
/** 
 * An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
**/
export class Change extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeName" })
  changeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeType" })
  changeType: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=Entity" })
  entity: Entity;
}
