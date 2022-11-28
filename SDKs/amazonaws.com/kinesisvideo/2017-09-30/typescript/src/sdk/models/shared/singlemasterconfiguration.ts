import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class SingleMasterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}
