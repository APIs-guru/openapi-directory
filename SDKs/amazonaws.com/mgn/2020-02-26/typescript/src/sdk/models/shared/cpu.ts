import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cpu
/** 
 * Source server CPU information.
**/
export class Cpu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores?: number;

  @SpeakeasyMetadata({ data: "json, name=modelName" })
  modelName?: string;
}
