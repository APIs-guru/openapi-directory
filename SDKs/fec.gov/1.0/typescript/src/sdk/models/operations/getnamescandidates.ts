import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamesCandidatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesCandidatesQueryParams;
}


export class GetNamesCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  candidateSearchList?: shared.CandidateSearchList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
