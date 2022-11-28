import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfaceTypeEnum } from "./interfacetypeenum";
import { TunnelInfo } from "./tunnelinfo";



export class InterfaceDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dstIpAddress?: string;

  @SpeakeasyMetadata()
  dstMacAddress?: string;

  @SpeakeasyMetadata()
  interfaceType: InterfaceTypeEnum;

  @SpeakeasyMetadata()
  srcMacAddress?: string;

  @SpeakeasyMetadata()
  tunnelInfo?: TunnelInfo;
}
