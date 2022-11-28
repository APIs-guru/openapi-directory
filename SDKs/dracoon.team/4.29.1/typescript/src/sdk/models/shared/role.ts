import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Right } from "./right";



// Role
/** 
 * Role information
**/
export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Right })
  items?: Right[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
