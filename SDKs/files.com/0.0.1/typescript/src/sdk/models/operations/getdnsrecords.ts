import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDnsRecordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetDnsRecordsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDnsRecordsQueryParams;
}


export class GetDnsRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DnsRecordEntity })
  dnsRecordEntities?: shared.DnsRecordEntity[];

  @Metadata()
  statusCode: number;
}
