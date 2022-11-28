import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataShare } from "./datashare";



export class DescribeDataSharesForProducerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DataShare })
  dataShares?: DataShare[];

  @SpeakeasyMetadata()
  marker?: string;
}
