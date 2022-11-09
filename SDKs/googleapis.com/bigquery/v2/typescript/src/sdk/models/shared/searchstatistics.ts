import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndexUnusedReason } from "./indexunusedreason";


export class SearchStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexUnusedReason", elemType: shared.IndexUnusedReason })
  indexUnusedReason?: IndexUnusedReason[];

  @Metadata({ data: "json, name=indexUsageMode" })
  indexUsageMode?: string;
}
