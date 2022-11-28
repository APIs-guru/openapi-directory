import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfiguration } from "./managedconfiguration";



export class ManagedConfigurationsForDeviceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedConfigurationForDevice", elemType: ManagedConfiguration })
  managedConfigurationForDevice?: ManagedConfiguration[];
}
