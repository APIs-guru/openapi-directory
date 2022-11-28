import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppExternalCpd extends SpeakeasyBase {
  @SpeakeasyMetadata()
  inheritedAttributes: Map<string, any>;

  @SpeakeasyMetadata()
  virtualNetworkInterfaceRequirements?: string[];
}
