import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSiteIpAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSiteIpAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSiteIpAddressesQueryParams;
}


export class GetSiteIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IpAddressEntity })
  ipAddressEntities?: shared.IpAddressEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
