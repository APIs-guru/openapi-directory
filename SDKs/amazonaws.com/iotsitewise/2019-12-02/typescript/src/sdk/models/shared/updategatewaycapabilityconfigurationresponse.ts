import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";


export class UpdateGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @Metadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;
}
