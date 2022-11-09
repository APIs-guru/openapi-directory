import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cpu
/** 
 * Source server CPU information.
**/
export class Cpu extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores?: number;

  @Metadata({ data: "json, name=modelName" })
  modelName?: string;
}
