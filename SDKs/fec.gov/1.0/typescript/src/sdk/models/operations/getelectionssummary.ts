import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetElectionsSummaryOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}


export class GetElectionsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office: GetElectionsSummaryOfficeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetElectionsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetElectionsSummaryQueryParams;
}


export class GetElectionsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  electionSummary?: shared.ElectionSummary;

  @SpeakeasyMetadata()
  statusCode: number;
}
