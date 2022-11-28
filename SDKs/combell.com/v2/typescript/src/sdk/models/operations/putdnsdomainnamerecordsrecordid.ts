import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class PutDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class PutDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDnsDomainNameRecordsRecordIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutDnsDomainNameRecordsRecordIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DnsRecord;
}


export class PutDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
