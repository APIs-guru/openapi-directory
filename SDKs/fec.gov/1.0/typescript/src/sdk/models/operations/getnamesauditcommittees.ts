import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNamesAuditCommitteesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesAuditCommitteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesAuditCommitteesQueryParams;
}


export class GetNamesAuditCommitteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditCommitteeSearchList?: shared.AuditCommitteeSearchList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
