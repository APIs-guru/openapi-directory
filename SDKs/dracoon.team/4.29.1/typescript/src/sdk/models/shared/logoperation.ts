import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogOperation
/** 
 * Log operation
**/
export class LogOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isDeprecated" })
  isDeprecated: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;
}
