import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagsCountTypeEnum {
    Tp = "tp",
    Tl = "tl",
    Dp = "dp",
    Gr = "gr"
}


export class TagsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datapoints" })
  datapoints?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groups" })
  groups?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagsCountTypeEnum;
}


export class TagsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagsCountQueryParams;
}


export class TagsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
