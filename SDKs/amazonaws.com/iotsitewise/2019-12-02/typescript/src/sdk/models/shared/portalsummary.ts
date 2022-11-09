import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalStatus } from "./portalstatus";


// PortalSummary
/** 
 * Contains a portal summary.
**/
export class PortalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=startUrl" })
  startUrl: string;

  @Metadata({ data: "json, name=status" })
  status: PortalStatus;
}
