import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TunnelTypeEnum } from "./tunneltypeenum";



export class TunnelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tunnelDstAddress: string;

  @SpeakeasyMetadata()
  tunnelSpecificData?: string;

  @SpeakeasyMetadata()
  tunnelSrcAddress: string;

  @SpeakeasyMetadata()
  tunnelType: TunnelTypeEnum;
}
