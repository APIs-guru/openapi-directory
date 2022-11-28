import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDashboardOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dashboardArn?: string;

  @SpeakeasyMetadata()
  dashboardBody?: string;

  @SpeakeasyMetadata()
  dashboardName?: string;
}
