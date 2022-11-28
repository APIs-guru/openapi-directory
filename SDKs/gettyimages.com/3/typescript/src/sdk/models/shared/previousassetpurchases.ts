import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviousAssetPurchase } from "./previousassetpurchase";



export class PreviousAssetPurchases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previous_purchases", elemType: PreviousAssetPurchase })
  previousPurchases?: PreviousAssetPurchase[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}
