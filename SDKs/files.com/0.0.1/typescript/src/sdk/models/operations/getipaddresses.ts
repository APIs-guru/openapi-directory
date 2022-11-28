import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIpAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetIpAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIpAddressesQueryParams;
}


export class GetIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IpAddressEntity })
  ipAddressEntities?: shared.IpAddressEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
