import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagsGetTypeEnum {
    Tp = "tp"
,    Tl = "tl"
,    Dp = "dp"
,    Gr = "gr"
}


export class TagsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=datapoints" })
  datapoints?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groups" })
  groups?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagsGetTypeEnum;
}


export class TagsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagsGetQueryParams;
}


export class TagsGetResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
