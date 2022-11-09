import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListGroupsEmbargoedEnum {
    Include = "include"
,    Exclude = "exclude"
,    Only = "only"
}

export enum ListGroupsGroupTypeEnum {
    Collection = "collection"
,    Franchise = "franchise"
,    Gallery = "gallery"
,    Season = "season"
}

export enum ListGroupsMixinEnum {
    AlternateImages = "alternate_images"
,    GroupFor = "group_for"
,    Images = "images"
,    RelatedLinks = "related_links"
}

export enum ListGroupsSortEnum {
    Pid = "pid"
}

export enum ListGroupsSortDirectionEnum {
    Descending = "descending"
}


export class ListGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListGroupsEmbargoedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=for_descendants_of" })
  forDescendantsOf?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=for_programme" })
  forProgramme?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_type" })
  groupType?: ListGroupsGroupTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=member" })
  member?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListGroupsMixinEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListGroupsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListGroupsSortDirectionEnum;
}


export class ListGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListGroupsQueryParams;
}


export class ListGroupsResponse extends SpeakeasyBase {
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
