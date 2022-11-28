import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealServingMetadataDealPauseStatus } from "./dealservingmetadatadealpausestatus";



export class DealServingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alcoholAdsAllowed" })
  alcoholAdsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dealPauseStatus" })
  dealPauseStatus?: DealServingMetadataDealPauseStatus;
}
