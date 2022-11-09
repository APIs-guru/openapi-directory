import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPresidentialContributionsByCandidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_state" })
  contributorState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

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


export class GetPresidentialContributionsByCandidateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPresidentialContributionsByCandidateQueryParams;
}


export class GetPresidentialContributionsByCandidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  presidentialByCandidatePage?: shared.PresidentialByCandidatePage;

  @Metadata()
  statusCode: number;
}
