import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EurekaInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonce" })
  nonce: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options" })
  options: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=params" })
  params: string;
}


export class EurekaInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EurekaInfoQueryParams;
}


export class EurekaInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example1?: shared.Example1;

  @SpeakeasyMetadata()
  statusCode: number;
}
