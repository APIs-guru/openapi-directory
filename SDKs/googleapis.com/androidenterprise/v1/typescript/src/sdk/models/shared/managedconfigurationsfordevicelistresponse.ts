import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedConfiguration } from "./managedconfiguration";


export class ManagedConfigurationsForDeviceListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedConfigurationForDevice", elemType: shared.ManagedConfiguration })
  managedConfigurationForDevice?: ManagedConfiguration[];
}
