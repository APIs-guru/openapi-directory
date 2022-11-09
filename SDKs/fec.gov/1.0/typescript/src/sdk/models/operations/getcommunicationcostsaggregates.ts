import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum {
    S = "S"
,    O = "O"
}


export class GetCommunicationCostsAggregatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;
}


export class GetCommunicationCostsAggregatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommunicationCostsAggregatesQueryParams;
}


export class GetCommunicationCostsAggregatesResponse extends SpeakeasyBase {
  @Metadata()
  communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
