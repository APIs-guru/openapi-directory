import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DealServingMetadataDealPauseStatus } from "./dealservingmetadatadealpausestatus";


export class DealServingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=alcoholAdsAllowed" })
  alcoholAdsAllowed?: boolean;

  @Metadata({ data: "json, name=dealPauseStatus" })
  dealPauseStatus?: DealServingMetadataDealPauseStatus;
}
