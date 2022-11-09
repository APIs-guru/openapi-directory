import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoAggregatedAggregatedResult } from "./apicoredtoaggregatedaggregatedresult";


export class ApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityDay" })
  activityDay?: string;

  @Metadata({ data: "json, name=commissionsCost" })
  commissionsCost?: number;

  @Metadata({ data: "json, name=conversionsCost" })
  conversionsCost?: number;

  @Metadata({ data: "json, name=conversionsValue" })
  conversionsValue?: number;

  @Metadata({ data: "json, name=convertedClicks" })
  convertedClicks?: number;

  @Metadata({ data: "json, name=entityData" })
  entityData?: Map<string, any>;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=fromDay" })
  fromDay?: string;

  @Metadata({ data: "json, name=hourlyBreakDown", elemType: shared.ApiCoreDtoAggregatedAggregatedResult })
  hourlyBreakDown?: Map<string, ApiCoreDtoAggregatedAggregatedResult>;

  @Metadata({ data: "json, name=lastHitDate" })
  lastHitDate?: string;

  @Metadata({ data: "json, name=spiderHitsCount" })
  spiderHitsCount?: number;

  @Metadata({ data: "json, name=toDay" })
  toDay?: string;

  @Metadata({ data: "json, name=totalClicks" })
  totalClicks?: number;

  @Metadata({ data: "json, name=totalViews" })
  totalViews?: number;

  @Metadata({ data: "json, name=uniqueClicks" })
  uniqueClicks?: number;

  @Metadata({ data: "json, name=uniqueConversions" })
  uniqueConversions?: number;

  @Metadata({ data: "json, name=uniqueViews" })
  uniqueViews?: number;
}
