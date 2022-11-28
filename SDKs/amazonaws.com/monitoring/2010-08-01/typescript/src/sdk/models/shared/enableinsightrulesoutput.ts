import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartialFailure } from "./partialfailure";



export class EnableInsightRulesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PartialFailure })
  failures?: PartialFailure[];
}
