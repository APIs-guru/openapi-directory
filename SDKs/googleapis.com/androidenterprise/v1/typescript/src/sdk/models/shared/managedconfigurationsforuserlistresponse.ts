import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfiguration } from "./managedconfiguration";



export class ManagedConfigurationsForUserListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedConfigurationForUser", elemType: ManagedConfiguration })
  managedConfigurationForUser?: ManagedConfiguration[];
}
