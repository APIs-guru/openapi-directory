import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetStatusEnum } from "./fleetstatusenum";



export class DescribeFleetMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompanyCode" })
  companyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetStatus" })
  fleetStatus?: FleetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OptimizeForEndUserLocation" })
  optimizeForEndUserLocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
