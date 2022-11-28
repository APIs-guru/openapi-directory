import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartialFailure } from "./partialfailure";



export class DisableInsightRulesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PartialFailure })
  failures?: PartialFailure[];
}
