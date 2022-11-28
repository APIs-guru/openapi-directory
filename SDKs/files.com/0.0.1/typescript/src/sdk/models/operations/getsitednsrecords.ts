import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSiteDnsRecordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSiteDnsRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSiteDnsRecordsQueryParams;
}


export class GetSiteDnsRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DnsRecordEntity })
  dnsRecordEntities?: shared.DnsRecordEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
