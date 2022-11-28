import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListGroupsEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}

export enum ListGroupsGroupTypeEnum {
    Collection = "collection",
    Franchise = "franchise",
    Gallery = "gallery",
    Season = "season"
}

export enum ListGroupsMixinEnum {
    AlternateImages = "alternate_images",
    GroupFor = "group_for",
    Images = "images",
    RelatedLinks = "related_links"
}

export enum ListGroupsSortEnum {
    Pid = "pid"
}

export enum ListGroupsSortDirectionEnum {
    Descending = "descending"
}


export class ListGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embargoed" })
  embargoed?: ListGroupsEmbargoedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=for_descendants_of" })
  forDescendantsOf?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=for_programme" })
  forProgramme?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type" })
  groupType?: ListGroupsGroupTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: ListGroupsMixinEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" })
  partnerPid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" })
  pid?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListGroupsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListGroupsSortDirectionEnum;
}


export class ListGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListGroupsQueryParams;
}


export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
