import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecManagedConfigurations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
