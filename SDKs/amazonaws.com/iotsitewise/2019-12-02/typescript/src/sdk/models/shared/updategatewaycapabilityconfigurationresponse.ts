import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";



export class UpdateGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @SpeakeasyMetadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;
}
