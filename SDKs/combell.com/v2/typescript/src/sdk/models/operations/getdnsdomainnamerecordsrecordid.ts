import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class GetDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class GetDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDnsDomainNameRecordsRecordIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDnsDomainNameRecordsRecordIdQueryParams;
}


export class GetDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dnsRecord?: shared.DnsRecord;

  @SpeakeasyMetadata()
  statusCode: number;
}
