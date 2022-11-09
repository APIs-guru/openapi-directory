import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommunicationCostsTotalsByCandidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetCommunicationCostsTotalsByCandidateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommunicationCostsTotalsByCandidateQueryParams;
}


export class GetCommunicationCostsTotalsByCandidateResponse extends SpeakeasyBase {
  @Metadata()
  ccTotalsByCandidatePage?: shared.CcTotalsByCandidatePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
