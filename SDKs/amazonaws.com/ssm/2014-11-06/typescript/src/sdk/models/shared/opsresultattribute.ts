import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsResultAttribute
/** 
 * The OpsItem data type to return.
**/
export class OpsResultAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypeName" })
  typeName: string;
}
