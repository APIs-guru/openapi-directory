import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class DeleteDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class DeleteDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDnsDomainNameRecordsRecordIdPathParams;

  @Metadata()
  queryParams: DeleteDnsDomainNameRecordsRecordIdQueryParams;
}


export class DeleteDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
