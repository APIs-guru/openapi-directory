import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConversionsGetStatusEnum {
    Deleted = "deleted"
,    Active = "active"
}


export class ConversionsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ConversionsGetStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;
}


export class ConversionsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConversionsGetQueryParams;
}


export class ConversionsGetResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
