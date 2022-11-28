import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";



export class DescribeGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilityConfiguration" })
  capabilityConfiguration: string;

  @SpeakeasyMetadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @SpeakeasyMetadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId: string;
}
