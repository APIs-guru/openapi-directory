import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DomainsCountTypeEnum {
    System = "system",
    Go = "go",
    Personal = "personal",
    Dedicated = "dedicated"
}


export class DomainsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DomainsCountTypeEnum;
}


export class DomainsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DomainsCountQueryParams;
}


export class DomainsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
