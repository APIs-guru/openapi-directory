import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommunicationCostsByCandidateOfficeEnum {
    House = "house"
,    Senate = "senate"
,    President = "president"
}

export enum GetCommunicationCostsByCandidateSupportOpposeEnum {
    S = "S"
,    O = "O"
}


export class GetCommunicationCostsByCandidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCommunicationCostsByCandidateOfficeEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=support_oppose" })
  supportOppose?: GetCommunicationCostsByCandidateSupportOpposeEnum;
}


export class GetCommunicationCostsByCandidateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommunicationCostsByCandidateQueryParams;
}


export class GetCommunicationCostsByCandidateResponse extends SpeakeasyBase {
  @Metadata()
  communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
