import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNamesCandidatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesCandidatesQueryParams;
}


export class GetNamesCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  candidateSearchList?: shared.CandidateSearchList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
