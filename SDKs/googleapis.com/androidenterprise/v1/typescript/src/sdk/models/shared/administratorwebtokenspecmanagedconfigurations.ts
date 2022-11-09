import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdministratorWebTokenSpecManagedConfigurations extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
