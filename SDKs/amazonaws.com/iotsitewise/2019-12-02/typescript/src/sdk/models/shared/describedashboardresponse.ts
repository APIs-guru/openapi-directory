import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboardArn" })
  dashboardArn: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardCreationDate" })
  dashboardCreationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=dashboardDefinition" })
  dashboardDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardDescription" })
  dashboardDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardId" })
  dashboardId: string;

  @SpeakeasyMetadata({ data: "json, name=dashboardLastUpdateDate" })
  dashboardLastUpdateDate: Date;

  @SpeakeasyMetadata({ data: "json, name=dashboardName" })
  dashboardName: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;
}
