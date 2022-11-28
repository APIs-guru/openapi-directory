import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityDay" })
  activityDay?: string;

  @SpeakeasyMetadata({ data: "json, name=commissionsCost" })
  commissionsCost?: number;

  @SpeakeasyMetadata({ data: "json, name=conversionsCost" })
  conversionsCost?: number;

  @SpeakeasyMetadata({ data: "json, name=conversionsValue" })
  conversionsValue?: number;

  @SpeakeasyMetadata({ data: "json, name=convertedClicks" })
  convertedClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=entityData" })
  entityData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDay" })
  fromDay?: string;

  @SpeakeasyMetadata({ data: "json, name=hourlyBreakDown", elemType: ApiCoreDtoAggregatedAggregatedResult })
  hourlyBreakDown?: Map<string, ApiCoreDtoAggregatedAggregatedResult>;

  @SpeakeasyMetadata({ data: "json, name=lastHitDate" })
  lastHitDate?: string;

  @SpeakeasyMetadata({ data: "json, name=spiderHitsCount" })
  spiderHitsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=toDay" })
  toDay?: string;

  @SpeakeasyMetadata({ data: "json, name=totalClicks" })
  totalClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=totalViews" })
  totalViews?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueClicks" })
  uniqueClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueConversions" })
  uniqueConversions?: number;

  @SpeakeasyMetadata({ data: "json, name=uniqueViews" })
  uniqueViews?: number;
}
