import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdministratorWebTokenSpecPlaySearch extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveApps" })
  approveApps?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
