import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Nameserver
/** 
 * Nameserver includes the following elements.
**/
export class Nameserver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlueIps" })
  glueIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
