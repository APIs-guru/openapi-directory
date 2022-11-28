import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsResultAttribute
/** 
 * The OpsItem data type to return.
**/
export class OpsResultAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
