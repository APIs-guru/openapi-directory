import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: string;
}


export class DeleteDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" })
  domainName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_id" })
  recordId: string;
}


export class DeleteDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDnsDomainNameRecordsRecordIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteDnsDomainNameRecordsRecordIdQueryParams;
}


export class DeleteDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
