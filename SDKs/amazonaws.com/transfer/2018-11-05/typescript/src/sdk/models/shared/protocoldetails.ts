import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProtocolDetails
/** 
 * <p> The protocol settings that are configured for your server. </p> <note> <p> This type is only valid in the <code>UpdateServer</code> API. </p> </note>
**/
export class ProtocolDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=PassiveIp" })
  passiveIp?: string;
}
