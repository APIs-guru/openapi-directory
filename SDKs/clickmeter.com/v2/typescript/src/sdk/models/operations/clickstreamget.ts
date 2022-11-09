import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ClickStreamGetFilterEnum {
    Unknown = ""
,    Spiders = "spiders"
,    Uniques = "uniques"
,    Nonuniques = "nonuniques"
,    Conversions = "conversions"
}


export class ClickStreamGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conversion" })
  conversion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datapoint" })
  datapoint?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ClickStreamGetFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class ClickStreamGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClickStreamGetQueryParams;
}


export class ClickStreamGetResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
