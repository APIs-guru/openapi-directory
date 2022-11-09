import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PreviousAssetPurchase } from "./previousassetpurchase";


export class PreviousAssetPurchases extends SpeakeasyBase {
  @Metadata({ data: "json, name=previous_purchases", elemType: shared.PreviousAssetPurchase })
  previousPurchases?: PreviousAssetPurchase[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}
