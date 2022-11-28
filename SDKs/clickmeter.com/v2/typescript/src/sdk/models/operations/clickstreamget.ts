import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ClickStreamGetFilterEnum {
    Unknown = "",
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}


export class ClickStreamGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversion" })
  conversion?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoint" })
  datapoint?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ClickStreamGetFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class ClickStreamGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ClickStreamGetQueryParams;
}


export class ClickStreamGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
