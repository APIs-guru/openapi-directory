import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversionsGetDatapointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversionId" })
  conversionId: number;
}

export enum ConversionsGetDatapointsStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum ConversionsGetDatapointsTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class ConversionsGetDatapointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ConversionsGetDatapointsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ConversionsGetDatapointsTypeEnum;
}


export class ConversionsGetDatapointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversionsGetDatapointsPathParams;

  @Metadata()
  queryParams: ConversionsGetDatapointsQueryParams;
}


export class ConversionsGetDatapointsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
