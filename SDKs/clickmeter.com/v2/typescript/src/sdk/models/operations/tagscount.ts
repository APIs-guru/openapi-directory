import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TagsCountTypeEnum {
    Tp = "tp"
,    Tl = "tl"
,    Dp = "dp"
,    Gr = "gr"
}


export class TagsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=datapoints" })
  datapoints?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groups" })
  groups?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagsCountTypeEnum;
}


export class TagsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagsCountQueryParams;
}


export class TagsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
