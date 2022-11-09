import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIpAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetIpAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIpAddressesQueryParams;
}


export class GetIpAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.IpAddressEntity })
  ipAddressEntities?: shared.IpAddressEntity[];

  @Metadata()
  statusCode: number;
}
