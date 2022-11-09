import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDashboardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashboardArn" })
  dashboardArn: string;

  @Metadata({ data: "json, name=dashboardCreationDate" })
  dashboardCreationDate: Date;

  @Metadata({ data: "json, name=dashboardDefinition" })
  dashboardDefinition: string;

  @Metadata({ data: "json, name=dashboardDescription" })
  dashboardDescription?: string;

  @Metadata({ data: "json, name=dashboardId" })
  dashboardId: string;

  @Metadata({ data: "json, name=dashboardLastUpdateDate" })
  dashboardLastUpdateDate: Date;

  @Metadata({ data: "json, name=dashboardName" })
  dashboardName: string;

  @Metadata({ data: "json, name=projectId" })
  projectId: string;
}
