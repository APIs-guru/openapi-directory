import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapabilitySyncStatusEnum } from "./capabilitysyncstatusenum";


export class DescribeGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilityConfiguration" })
  capabilityConfiguration: string;

  @Metadata({ data: "json, name=capabilityNamespace" })
  capabilityNamespace: string;

  @Metadata({ data: "json, name=capabilitySyncStatus" })
  capabilitySyncStatus: CapabilitySyncStatusEnum;

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId: string;
}
