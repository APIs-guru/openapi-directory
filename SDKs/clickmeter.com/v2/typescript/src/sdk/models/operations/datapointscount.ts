import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DataPointsCountStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum DataPointsCountTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class DataPointsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" })
  onlyFavorites?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsCountStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DataPointsCountTypeEnum;
}


export class DataPointsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DataPointsCountQueryParams;
}


export class DataPointsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
