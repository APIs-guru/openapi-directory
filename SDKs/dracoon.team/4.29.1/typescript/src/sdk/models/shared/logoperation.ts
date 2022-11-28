import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogOperation
/** 
 * Log operation
**/
export class LogOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isDeprecated" })
  isDeprecated: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
