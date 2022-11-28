import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedUse } from "./alloweduse";
import { VideoSearchItemDisplaySize } from "./videosearchitemdisplaysize";
import { IStockLicense } from "./istocklicense";
import { Keyword } from "./keyword";
import { Download } from "./download";
import { ReferralDestination } from "./referraldestination";



export class CreativeVideoSearchItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_use" })
  allowedUse?: AllowedUse;

  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=clip_length" })
  clipLength?: string;

  @SpeakeasyMetadata({ data: "json, name=collection_code" })
  collectionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=collection_id" })
  collectionId?: number;

  @SpeakeasyMetadata({ data: "json, name=collection_name" })
  collectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=color_type" })
  colorType?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=display_sizes", elemType: VideoSearchItemDisplaySize })
  displaySizes?: VideoSearchItemDisplaySize[];

  @SpeakeasyMetadata({ data: "json, name=download_product" })
  downloadProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=era" })
  era?: string;

  @SpeakeasyMetadata({ data: "json, name=event_ids" })
  eventIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=istock_licenses", elemType: IStockLicense })
  istockLicenses?: IStockLicense[];

  @SpeakeasyMetadata({ data: "json, name=keywords", elemType: Keyword })
  keywords?: Keyword[];

  @SpeakeasyMetadata({ data: "json, name=largest_downloads", elemType: Download })
  largestDownloads?: Download[];

  @SpeakeasyMetadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=mastered_to" })
  masteredTo?: string;

  @SpeakeasyMetadata({ data: "json, name=originally_shot_on" })
  originallyShotOn?: string;

  @SpeakeasyMetadata({ data: "json, name=product_types" })
  productTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=referral_destinations", elemType: ReferralDestination })
  referralDestinations?: ReferralDestination[];

  @SpeakeasyMetadata({ data: "json, name=shot_speed" })
  shotSpeed?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
