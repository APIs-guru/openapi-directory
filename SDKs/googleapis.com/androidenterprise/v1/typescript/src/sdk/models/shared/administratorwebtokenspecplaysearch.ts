import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecPlaySearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveApps" })
  approveApps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
