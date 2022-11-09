import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedConfiguration } from "./managedconfiguration";


export class ManagedConfigurationsForUserListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedConfigurationForUser", elemType: shared.ManagedConfiguration })
  managedConfigurationForUser?: ManagedConfiguration[];
}
