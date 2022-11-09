import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamesAuditCommitteesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesAuditCommitteesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesAuditCommitteesQueryParams;
}


export class GetNamesAuditCommitteesResponse extends SpeakeasyBase {
  @Metadata()
  auditCommitteeSearchList?: shared.AuditCommitteeSearchList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
