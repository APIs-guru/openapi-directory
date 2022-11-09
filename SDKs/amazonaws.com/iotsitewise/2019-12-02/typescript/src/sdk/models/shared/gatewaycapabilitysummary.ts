import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";


// GatewayCapabilitySummary
/** 
 * Contains a summary of a gateway capability configuration.
**/
export class GatewayCapabilitySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @Metadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;
}
