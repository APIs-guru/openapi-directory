import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DataPointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}

export enum DataPointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}


export class DataPointsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" })
  onlyFavorites?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: DataPointsCountStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DataPointsCountTypeEnum;
}


export class DataPointsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DataPointsCountQueryParams;
}


export class DataPointsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
