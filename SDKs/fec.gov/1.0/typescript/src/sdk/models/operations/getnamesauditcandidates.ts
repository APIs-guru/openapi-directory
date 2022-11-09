import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamesAuditCandidatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesAuditCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesAuditCandidatesQueryParams;
}


export class GetNamesAuditCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  auditCandidateSearchList?: shared.AuditCandidateSearchList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
