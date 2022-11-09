import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Config
/** 
 * Available configurations to provision an Instance.
**/
export class Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmekKeyName" })
  cmekKeyName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
