import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecWebApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
