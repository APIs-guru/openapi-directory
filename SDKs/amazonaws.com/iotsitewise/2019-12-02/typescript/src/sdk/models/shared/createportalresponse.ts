import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalStatus } from "./portalstatus";


export class CreatePortalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=portalArn" })
  portalArn: string;

  @Metadata({ data: "json, name=portalId" })
  portalId: string;

  @Metadata({ data: "json, name=portalStartUrl" })
  portalStartUrl: string;

  @Metadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;

  @Metadata({ data: "json, name=ssoApplicationId" })
  ssoApplicationId: string;
}
