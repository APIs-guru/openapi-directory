import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPromotionsMixinEnum {
    RelatedLinks = "related_links"
}

export enum ListPromotionsStatusEnum {
    Current = "current"
}


export class ListPromotionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=context" })
  context?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListPromotionsMixinEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=promoted_by" })
  promotedBy?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=promoted_for" })
  promotedFor?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListPromotionsStatusEnum[];
}


export class ListPromotionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPromotionsQueryParams;
}


export class ListPromotionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
