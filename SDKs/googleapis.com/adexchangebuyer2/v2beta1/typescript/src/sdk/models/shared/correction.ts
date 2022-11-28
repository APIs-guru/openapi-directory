import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServingContext } from "./servingcontext";


export enum CorrectionTypeEnum {
    CorrectionTypeUnspecified = "CORRECTION_TYPE_UNSPECIFIED",
    VendorIdsAdded = "VENDOR_IDS_ADDED",
    SslAttributeRemoved = "SSL_ATTRIBUTE_REMOVED",
    FlashFreeAttributeRemoved = "FLASH_FREE_ATTRIBUTE_REMOVED",
    FlashFreeAttributeAdded = "FLASH_FREE_ATTRIBUTE_ADDED",
    RequiredAttributeAdded = "REQUIRED_ATTRIBUTE_ADDED",
    RequiredVendorAdded = "REQUIRED_VENDOR_ADDED",
    SslAttributeAdded = "SSL_ATTRIBUTE_ADDED",
    InBannerVideoAttributeAdded = "IN_BANNER_VIDEO_ATTRIBUTE_ADDED",
    MraidAttributeAdded = "MRAID_ATTRIBUTE_ADDED",
    FlashAttributeRemoved = "FLASH_ATTRIBUTE_REMOVED",
    VideoInSnippetAttributeAdded = "VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED"
}


// Correction
/** 
 * Output only. Shows any corrections that were applied to this creative.
**/
export class Correction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: ServingContext })
  contexts?: ServingContext[];

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CorrectionTypeEnum;
}
