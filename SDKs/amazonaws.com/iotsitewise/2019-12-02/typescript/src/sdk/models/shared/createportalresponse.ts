import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";



export class CreatePortalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portalArn" })
  portalArn: string;

  @SpeakeasyMetadata({ data: "json, name=portalId" })
  portalId: string;

  @SpeakeasyMetadata({ data: "json, name=portalStartUrl" })
  portalStartUrl: string;

  @SpeakeasyMetadata({ data: "json, name=portalStatus" })
  portalStatus: PortalStatus;

  @SpeakeasyMetadata({ data: "json, name=ssoApplicationId" })
  ssoApplicationId: string;
}
