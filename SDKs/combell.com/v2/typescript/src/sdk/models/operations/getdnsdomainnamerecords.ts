import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDnsDomainNameRecordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;
}


export class GetDnsDomainNameRecordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_name" })
  recordName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetDnsDomainNameRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDnsDomainNameRecordsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDnsDomainNameRecordsQueryParams;
}


export class GetDnsDomainNameRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DnsRecord })
  dnsRecords?: shared.DnsRecord[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
