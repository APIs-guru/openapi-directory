import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=automate_id" })
  automateId?: string;

  @Metadata({ data: "json, name=blendr_id" })
  blendrId?: string;

  @Metadata({ data: "json, name=card_background_color" })
  cardBackgroundColor?: string;

  @Metadata({ data: "json, name=card_background_image" })
  cardBackgroundImage?: File;

  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];

  @Metadata({ data: "json, name=cloud_service_id" })
  cloudServiceId?: string;

  @Metadata({ data: "json, name=collections", elemType: shared.Collection })
  collections?: Collection[];

  @Metadata({ data: "json, name=combidesk_id" })
  combideskId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=detail_page_disabled" })
  detailPageDisabled?: boolean;

  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=features" })
  features?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integromat_id" })
  integromatId?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: Logo;

  @Metadata({ data: "json, name=media", elemType: shared.Media })
  media?: Media[];

  @Metadata({ data: "json, name=meta_tag_description" })
  metaTagDescription?: string;

  @Metadata({ data: "json, name=meta_tag_keywords" })
  metaTagKeywords?: string;

  @Metadata({ data: "json, name=meta_tag_title" })
  metaTagTitle?: string;

  @Metadata({ data: "json, name=microsoft_flow_id" })
  microsoftFlowId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=native_integration" })
  nativeIntegration?: boolean;

  @Metadata({ data: "json, name=native_integration_link" })
  nativeIntegrationLink?: string;

  @Metadata({ data: "json, name=partner" })
  partner?: Partner;

  @Metadata({ data: "json, name=piesync_id" })
  piesyncId?: string;

  @Metadata({ data: "json, name=pricing" })
  pricing?: string;

  @Metadata({ data: "json, name=products", elemType: shared.Product })
  products?: Product[];

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=published_at" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=screenshots", elemType: shared.Screenshot })
  screenshots?: Screenshot[];

  @Metadata({ data: "json, name=segment_id" })
  segmentId?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=sticky" })
  sticky?: boolean;

  @Metadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @Metadata({ data: "json, name=third_party_integration" })
  thirdPartyIntegration?: boolean;

  @Metadata({ data: "json, name=third_party_integration_link" })
  thirdPartyIntegrationLink?: string;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];

  @Metadata({ data: "json, name=tray_io_id" })
  trayIoId?: string;

  @Metadata({ data: "json, name=unify_connector_id" })
  unifyConnectorId?: string;

  @Metadata({ data: "json, name=upcoming" })
  upcoming?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=zapier_id" })
  zapierId?: string;
}
