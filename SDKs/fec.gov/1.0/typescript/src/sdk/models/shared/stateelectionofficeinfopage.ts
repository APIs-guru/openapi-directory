import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OffsetInfo } from "./offsetinfo";
import { StateElectionOfficeInfo } from "./stateelectionofficeinfo";


export class StateElectionOfficeInfoPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.StateElectionOfficeInfo })
  results?: StateElectionOfficeInfo[];
}
