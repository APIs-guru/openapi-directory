import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalStatus } from "./portalstatus";


export class DeletePortalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;
}
