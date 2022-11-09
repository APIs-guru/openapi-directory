import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDomainsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainsIdPathParams;
}


export class GetDomainsIdResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
