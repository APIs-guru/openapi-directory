import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIpAddressesReservedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetIpAddressesReservedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIpAddressesReservedQueryParams;
}


export class GetIpAddressesReservedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PublicIpAddressEntity })
  publicIpAddressEntities?: shared.PublicIpAddressEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
