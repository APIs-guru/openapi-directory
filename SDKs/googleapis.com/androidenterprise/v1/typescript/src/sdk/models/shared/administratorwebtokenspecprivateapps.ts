import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecPrivateApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
