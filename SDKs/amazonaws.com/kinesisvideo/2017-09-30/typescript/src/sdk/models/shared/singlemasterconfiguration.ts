import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class SingleMasterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}
