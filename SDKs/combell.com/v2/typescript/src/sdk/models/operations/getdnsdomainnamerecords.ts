import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDnsDomainNameRecordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetDnsDomainNameRecordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_name" })
  recordName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetDnsDomainNameRecordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDnsDomainNameRecordsPathParams;

  @Metadata()
  queryParams: GetDnsDomainNameRecordsQueryParams;
}


export class GetDnsDomainNameRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DnsRecord })
  dnsRecords?: shared.DnsRecord[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
