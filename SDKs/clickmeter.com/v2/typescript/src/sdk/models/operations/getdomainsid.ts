import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDomainsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainsIdPathParams;
}


export class GetDomainsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
