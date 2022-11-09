import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetElectionsSummaryOfficeEnum {
    House = "house"
,    Senate = "senate"
,    President = "president"
}


export class GetElectionsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office: GetElectionsSummaryOfficeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetElectionsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetElectionsSummaryQueryParams;
}


export class GetElectionsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  electionSummary?: shared.ElectionSummary;

  @Metadata()
  statusCode: number;
}
