import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";



// PortalSummary
/** 
 * Contains a portal summary.
**/
export class PortalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=startUrl" })
  startUrl: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PortalStatus;
}
