import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { StateElectionOfficeInfo } from "./stateelectionofficeinfo";



export class StateElectionOfficeInfoPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: StateElectionOfficeInfo })
  results?: StateElectionOfficeInfo[];
}
