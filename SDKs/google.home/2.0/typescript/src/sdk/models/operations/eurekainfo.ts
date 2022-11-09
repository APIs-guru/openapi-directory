import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EurekaInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nonce" })
  nonce: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=options" })
  options: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=params" })
  params: string;
}


export class EurekaInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EurekaInfoQueryParams;
}


export class EurekaInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example1?: shared.Example1;

  @Metadata()
  statusCode: number;
}
