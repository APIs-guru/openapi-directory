import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNamesAuditCandidatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesAuditCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesAuditCandidatesQueryParams;
}


export class GetNamesAuditCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditCandidateSearchList?: shared.AuditCandidateSearchList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
