import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CommitteeReports } from "./committeereports";



export class CommitteeReportsPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CommitteeReports })
  results?: CommitteeReports[];
}
