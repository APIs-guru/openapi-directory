import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreativeCorrections extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeDisapprovalReasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeFilteringReasonsReasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=filteringCount" })
  filteringCount?: string;

  @Metadata({ data: "json, name=filteringStatus" })
  filteringStatus?: number;
}


// CreativeFilteringReasons
/** 
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
export class CreativeFilteringReasons extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=reasons", elemType: shared.CreativeFilteringReasonsReasons })
  reasons?: CreativeFilteringReasonsReasons[];
}


// Creative
/** 
 * A creative and its classification data.
**/
export class Creative extends SpeakeasyBase {
  @Metadata({ data: "json, name=HTMLSnippet" })
  htmlSnippet?: string;

  @Metadata({ data: "json, name=accountId" })
  accountId?: number;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string[];

  @Metadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @Metadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @Metadata({ data: "json, name=apiUploadTimestamp" })
  apiUploadTimestamp?: Date;

  @Metadata({ data: "json, name=attribute" })
  attribute?: number[];

  @Metadata({ data: "json, name=buyerCreativeId" })
  buyerCreativeId?: string;

  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: string[];

  @Metadata({ data: "json, name=corrections", elemType: shared.CreativeCorrections })
  corrections?: CreativeCorrections[];

  @Metadata({ data: "json, name=disapprovalReasons", elemType: shared.CreativeDisapprovalReasons })
  disapprovalReasons?: CreativeDisapprovalReasons[];

  @Metadata({ data: "json, name=filteringReasons" })
  filteringReasons?: CreativeFilteringReasons;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=impressionTrackingUrl" })
  impressionTrackingUrl?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=productCategories" })
  productCategories?: number[];

  @Metadata({ data: "json, name=restrictedCategories" })
  restrictedCategories?: number[];

  @Metadata({ data: "json, name=sensitiveCategories" })
  sensitiveCategories?: number[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=vendorType" })
  vendorType?: number[];

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=videoURL" })
  videoUrl?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
