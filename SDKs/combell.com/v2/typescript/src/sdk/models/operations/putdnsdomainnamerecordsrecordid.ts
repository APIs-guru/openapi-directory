import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class PutDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class PutDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDnsDomainNameRecordsRecordIdPathParams;

  @Metadata()
  queryParams: PutDnsDomainNameRecordsRecordIdQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DnsRecord;
}


export class PutDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
