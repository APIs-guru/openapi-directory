import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Nameserver
/** 
 * Nameserver includes the following elements.
**/
export class Nameserver extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlueIps" })
  glueIps?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;
}
