import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataShare } from "./datashare";



export class DescribeDataSharesForConsumerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DataShare })
  dataShares?: DataShare[];

  @SpeakeasyMetadata()
  marker?: string;
}
