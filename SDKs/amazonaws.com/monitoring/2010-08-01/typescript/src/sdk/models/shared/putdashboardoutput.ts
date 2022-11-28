import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DashboardValidationMessage } from "./dashboardvalidationmessage";



export class PutDashboardOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DashboardValidationMessage })
  dashboardValidationMessages?: DashboardValidationMessage[];
}
