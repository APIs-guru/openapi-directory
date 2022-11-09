import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoTopsTopItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityData" })
  entityData?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastHitDate" })
  lastHitDate?: string;

  @Metadata({ data: "json, name=spiderClicks" })
  spiderClicks?: number;

  @Metadata({ data: "json, name=spiderHits" })
  spiderHits?: number;

  @Metadata({ data: "json, name=spiderViews" })
  spiderViews?: number;

  @Metadata({ data: "json, name=totalClicks" })
  totalClicks?: number;

  @Metadata({ data: "json, name=totalCommissionsCost" })
  totalCommissionsCost?: number;

  @Metadata({ data: "json, name=totalConversions" })
  totalConversions?: number;

  @Metadata({ data: "json, name=totalConversionsCost" })
  totalConversionsCost?: number;

  @Metadata({ data: "json, name=totalConversionsValue" })
  totalConversionsValue?: number;

  @Metadata({ data: "json, name=totalHits" })
  totalHits?: number;

  @Metadata({ data: "json, name=totalViews" })
  totalViews?: number;

  @Metadata({ data: "json, name=uniqueClicks" })
  uniqueClicks?: number;

  @Metadata({ data: "json, name=uniqueHits" })
  uniqueHits?: number;

  @Metadata({ data: "json, name=uniqueViews" })
  uniqueViews?: number;
}
