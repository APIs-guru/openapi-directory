import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboardArn" })
  dashboardArn: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardId" })
  dashboardId: string;
}
