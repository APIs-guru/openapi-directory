import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecStoreBuilder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
