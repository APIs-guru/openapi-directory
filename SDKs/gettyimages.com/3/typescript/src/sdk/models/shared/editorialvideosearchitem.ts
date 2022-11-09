import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowedUse } from "./alloweduse";
import { VideoSearchItemDisplaySize } from "./videosearchitemdisplaysize";
import { IStockLicense } from "./istocklicense";
import { Keyword } from "./keyword";
import { Download } from "./download";
import { ReferralDestination } from "./referraldestination";


export class EditorialVideoSearchItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_use" })
  allowedUse?: AllowedUse;

  @Metadata({ data: "json, name=artist" })
  artist?: string;

  @Metadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=clip_length" })
  clipLength?: string;

  @Metadata({ data: "json, name=collection_code" })
  collectionCode?: string;

  @Metadata({ data: "json, name=collection_id" })
  collectionId?: number;

  @Metadata({ data: "json, name=collection_name" })
  collectionName?: string;

  @Metadata({ data: "json, name=color_type" })
  colorType?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=display_sizes", elemType: shared.VideoSearchItemDisplaySize })
  displaySizes?: VideoSearchItemDisplaySize[];

  @Metadata({ data: "json, name=download_product" })
  downloadProduct?: string;

  @Metadata({ data: "json, name=era" })
  era?: string;

  @Metadata({ data: "json, name=event_ids" })
  eventIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=istock_licenses", elemType: shared.IStockLicense })
  istockLicenses?: IStockLicense[];

  @Metadata({ data: "json, name=keywords", elemType: shared.Keyword })
  keywords?: Keyword[];

  @Metadata({ data: "json, name=largest_downloads", elemType: shared.Download })
  largestDownloads?: Download[];

  @Metadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @Metadata({ data: "json, name=mastered_to" })
  masteredTo?: string;

  @Metadata({ data: "json, name=originally_shot_on" })
  originallyShotOn?: string;

  @Metadata({ data: "json, name=product_types" })
  productTypes?: string[];

  @Metadata({ data: "json, name=referral_destinations", elemType: shared.ReferralDestination })
  referralDestinations?: ReferralDestination[];

  @Metadata({ data: "json, name=shot_speed" })
  shotSpeed?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
