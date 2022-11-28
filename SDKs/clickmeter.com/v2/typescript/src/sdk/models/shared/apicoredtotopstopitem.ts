import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoTopsTopItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityData" })
  entityData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastHitDate" })
  lastHitDate?: string;

  @SpeakeasyMetadata({ data: "json, name=spiderClicks" })
  spiderClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=spiderHits" })
  spiderHits?: number;

  @SpeakeasyMetadata({ data: "json, name=spiderViews" })
  spiderViews?: number;

  @SpeakeasyMetadata({ data: "json, name=totalClicks" })
  totalClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCommissionsCost" })
  totalCommissionsCost?: number;

  @SpeakeasyMetadata({ data: "json, name=totalConversions" })
  totalConversions?: number;

  @SpeakeasyMetadata({ data: "json, name=totalConversionsCost" })
  totalConversionsCost?: number;

  @SpeakeasyMetadata({ data: "json, name=totalConversionsValue" })
  totalConversionsValue?: number;

  @SpeakeasyMetadata({ data: "json, name=totalHits" })
  totalHits?: number;

  @SpeakeasyMetadata({ data: "json, name=totalViews" })
  totalViews?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueClicks" })
  uniqueClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueHits" })
  uniqueHits?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueViews" })
  uniqueViews?: number;
}
