import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { CommunicationCost } from "./communicationcost";



export class CommunicationCostPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CommunicationCost })
  results?: CommunicationCost[];
}
