import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedUse } from "./alloweduse";
import { ImageSearchItemDisplaySize } from "./imagesearchitemdisplaysize";
import { EditorialSource } from "./editorialsource";
import { Keyword } from "./keyword";
import { Download } from "./download";
import { MaxDimensions } from "./maxdimensions";
import { ReferralDestination } from "./referraldestination";



export class ImageSearchItemEditorial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_use" })
  allowedUse?: AllowedUse;

  @SpeakeasyMetadata({ data: "json, name=alternative_ids" })
  alternativeIds?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: string;

  @SpeakeasyMetadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=call_for_image" })
  callForImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

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

  @SpeakeasyMetadata({ data: "json, name=date_camera_shot" })
  dateCameraShot?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=display_sizes", elemType: ImageSearchItemDisplaySize })
  displaySizes?: ImageSearchItemDisplaySize[];

  @SpeakeasyMetadata({ data: "json, name=download_product" })
  downloadProduct?: string;

  @SpeakeasyMetadata({ data: "json, name=editorial_segments" })
  editorialSegments?: string[];

  @SpeakeasyMetadata({ data: "json, name=editorial_source" })
  editorialSource?: EditorialSource;

  @SpeakeasyMetadata({ data: "json, name=event_ids" })
  eventIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=graphical_style" })
  graphicalStyle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords", elemType: Keyword })
  keywords?: Keyword[];

  @SpeakeasyMetadata({ data: "json, name=largest_downloads", elemType: Download })
  largestDownloads?: Download[];

  @SpeakeasyMetadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=max_dimensions" })
  maxDimensions?: MaxDimensions;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: string;

  @SpeakeasyMetadata({ data: "json, name=people" })
  people?: string[];

  @SpeakeasyMetadata({ data: "json, name=product_types" })
  productTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=quality_rank" })
  qualityRank?: number;

  @SpeakeasyMetadata({ data: "json, name=referral_destinations", elemType: ReferralDestination })
  referralDestinations?: ReferralDestination[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uri_oembed" })
  uriOembed?: string;
}
