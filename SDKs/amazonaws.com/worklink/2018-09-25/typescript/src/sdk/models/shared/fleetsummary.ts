import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetStatusEnum } from "./fleetstatusenum";


// FleetSummary
/** 
 * The summary of the fleet.
**/
export class FleetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompanyCode" })
  companyCode?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetName" })
  fleetName?: string;

  @Metadata({ data: "json, name=FleetStatus" })
  fleetStatus?: FleetStatusEnum;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
