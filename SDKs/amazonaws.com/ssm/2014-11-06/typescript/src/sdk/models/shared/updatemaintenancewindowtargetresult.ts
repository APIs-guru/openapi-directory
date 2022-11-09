import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Target } from "./target";


export class UpdateMaintenanceWindowTargetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;

  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
