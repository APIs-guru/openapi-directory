import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdministratorWebTokenSpecStoreBuilder extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
