import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class GetDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class GetDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDnsDomainNameRecordsRecordIdPathParams;

  @Metadata()
  queryParams: GetDnsDomainNameRecordsRecordIdQueryParams;
}


export class GetDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dnsRecord?: shared.DnsRecord;

  @Metadata()
  statusCode: number;
}
