import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexUnusedReason } from "./indexunusedreason";



export class SearchStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexUnusedReason", elemType: IndexUnusedReason })
  indexUnusedReason?: IndexUnusedReason[];

  @SpeakeasyMetadata({ data: "json, name=indexUsageMode" })
  indexUsageMode?: string;
}
