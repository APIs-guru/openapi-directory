import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Right } from "./right";


// Role
/** 
 * Role information
**/
export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=items", elemType: shared.Right })
  items?: Right[];

  @Metadata({ data: "json, name=name" })
  name: string;
}
