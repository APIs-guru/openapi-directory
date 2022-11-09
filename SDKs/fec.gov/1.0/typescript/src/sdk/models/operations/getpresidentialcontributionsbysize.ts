import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPresidentialContributionsBySizeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetPresidentialContributionsBySizeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPresidentialContributionsBySizeQueryParams;
}


export class GetPresidentialContributionsBySizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  presidentialBySizePage?: shared.PresidentialBySizePage;

  @Metadata()
  statusCode: number;
}
