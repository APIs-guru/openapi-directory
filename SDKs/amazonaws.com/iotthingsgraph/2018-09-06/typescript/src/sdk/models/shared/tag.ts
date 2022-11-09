import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
