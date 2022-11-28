import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";



// GatewayCapabilitySummary
/** 
 * Contains a summary of a gateway capability configuration.
**/
export class GatewayCapabilitySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @SpeakeasyMetadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;
}
