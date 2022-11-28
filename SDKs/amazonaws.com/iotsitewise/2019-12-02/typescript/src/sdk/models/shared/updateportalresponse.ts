import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";



export class UpdatePortalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;
}
