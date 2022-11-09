import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetStatusEnum } from "./fleetstatusenum";


export class DescribeFleetMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompanyCode" })
  companyCode?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=FleetName" })
  fleetName?: string;

  @Metadata({ data: "json, name=FleetStatus" })
  fleetStatus?: FleetStatusEnum;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=OptimizeForEndUserLocation" })
  optimizeForEndUserLocation?: boolean;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
