import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DomainsCountTypeEnum {
    System = "system"
,    Go = "go"
,    Personal = "personal"
,    Dedicated = "dedicated"
}


export class DomainsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DomainsCountTypeEnum;
}


export class DomainsCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DomainsCountQueryParams;
}


export class DomainsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
