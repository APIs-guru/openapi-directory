import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetElectionDatesOfficeSoughtEnum {
    H = "H",
    S = "S",
    P = "P"
}


export class GetElectionDatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_district" })
  electionDistrict?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_party" })
  electionParty?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_state" })
  electionState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_type_id" })
  electionTypeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_create_date" })
  maxCreateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_election_date" })
  maxElectionDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_primary_general_date" })
  maxPrimaryGeneralDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_update_date" })
  maxUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_create_date" })
  minCreateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_election_date" })
  minElectionDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_primary_general_date" })
  minPrimaryGeneralDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_update_date" })
  minUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office_sought" })
  officeSought?: GetElectionDatesOfficeSoughtEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetElectionDatesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ElectionDate })
  results?: shared.ElectionDate[];
}


export class GetElectionDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetElectionDatesQueryParams;
}


export class GetElectionDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getElectionDatesDefaultApplicationJsonObject?: GetElectionDatesDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
