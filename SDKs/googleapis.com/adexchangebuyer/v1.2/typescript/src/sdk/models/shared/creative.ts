import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreativeCorrections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeDisapprovalReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CreativeFilteringReasonsReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filteringCount" })
  filteringCount?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringStatus" })
  filteringStatus?: number;
}


// CreativeFilteringReasons
/** 
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
export class CreativeFilteringReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: CreativeFilteringReasonsReasons })
  reasons?: CreativeFilteringReasonsReasons[];
}


// Creative
/** 
 * A creative and its classification data.
**/
export class Creative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HTMLSnippet" })
  htmlSnippet?: string;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string[];

  @SpeakeasyMetadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=apiUploadTimestamp" })
  apiUploadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: number[];

  @SpeakeasyMetadata({ data: "json, name=buyerCreativeId" })
  buyerCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=corrections", elemType: CreativeCorrections })
  corrections?: CreativeCorrections[];

  @SpeakeasyMetadata({ data: "json, name=disapprovalReasons", elemType: CreativeDisapprovalReasons })
  disapprovalReasons?: CreativeDisapprovalReasons[];

  @SpeakeasyMetadata({ data: "json, name=filteringReasons" })
  filteringReasons?: CreativeFilteringReasons;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" })
  impressionTrackingUrl?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategories" })
  productCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=restrictedCategories" })
  restrictedCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=sensitiveCategories" })
  sensitiveCategories?: number[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=vendorType" })
  vendorType?: number[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=videoURL" })
  videoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
