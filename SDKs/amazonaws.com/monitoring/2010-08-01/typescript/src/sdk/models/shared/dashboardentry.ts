import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DashboardEntry
/** 
 * Represents a specific dashboard.
**/
export class DashboardEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dashboardArn?: string;

  @SpeakeasyMetadata()
  dashboardName?: string;

  @SpeakeasyMetadata()
  lastModified?: Date;

  @SpeakeasyMetadata()
  size?: number;
}
