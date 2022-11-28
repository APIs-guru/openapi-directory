import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProtocolDetails
/** 
 * <p> The protocol settings that are configured for your server. </p> <note> <p> This type is only valid in the <code>UpdateServer</code> API. </p> </note>
**/
export class ProtocolDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PassiveIp" })
  passiveIp?: string;
}
