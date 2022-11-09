import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIpAddressesReservedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetIpAddressesReservedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetIpAddressesReservedQueryParams;
}


export class GetIpAddressesReservedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PublicIpAddressEntity })
  publicIpAddressEntities?: shared.PublicIpAddressEntity[];

  @Metadata()
  statusCode: number;
}
