import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DashboardEntry } from "./dashboardentry";



export class ListDashboardsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DashboardEntry })
  dashboardEntries?: DashboardEntry[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
