import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Category } from "./category";
import { Collection } from "./collection";
import { Logo } from "./logo";
import { Media } from "./media";
import { Partner } from "./partner";
import { Product } from "./product";
import { Screenshot } from "./screenshot";
import { Translation } from "./translation";



export class Listing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automate_id" })
  automateId?: string;

  @SpeakeasyMetadata({ data: "json, name=blendr_id" })
  blendrId?: string;

  @SpeakeasyMetadata({ data: "json, name=card_background_color" })
  cardBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=card_background_image" })
  cardBackgroundImage?: File;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=cloud_service_id" })
  cloudServiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=collections", elemType: Collection })
  collections?: Collection[];

  @SpeakeasyMetadata({ data: "json, name=combidesk_id" })
  combideskId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=detail_page_disabled" })
  detailPageDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=integromat_id" })
  integromatId?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: Logo;

  @SpeakeasyMetadata({ data: "json, name=media", elemType: Media })
  media?: Media[];

  @SpeakeasyMetadata({ data: "json, name=meta_tag_description" })
  metaTagDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=meta_tag_keywords" })
  metaTagKeywords?: string;

  @SpeakeasyMetadata({ data: "json, name=meta_tag_title" })
  metaTagTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=microsoft_flow_id" })
  microsoftFlowId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=native_integration" })
  nativeIntegration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=native_integration_link" })
  nativeIntegrationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: Partner;

  @SpeakeasyMetadata({ data: "json, name=piesync_id" })
  piesyncId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: Product })
  products?: Product[];

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=published_at" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=screenshots", elemType: Screenshot })
  screenshots?: Screenshot[];

  @SpeakeasyMetadata({ data: "json, name=segment_id" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @SpeakeasyMetadata({ data: "json, name=third_party_integration" })
  thirdPartyIntegration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=third_party_integration_link" })
  thirdPartyIntegrationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];

  @SpeakeasyMetadata({ data: "json, name=tray_io_id" })
  trayIoId?: string;

  @SpeakeasyMetadata({ data: "json, name=unify_connector_id" })
  unifyConnectorId?: string;

  @SpeakeasyMetadata({ data: "json, name=upcoming" })
  upcoming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=zapier_id" })
  zapierId?: string;
}
