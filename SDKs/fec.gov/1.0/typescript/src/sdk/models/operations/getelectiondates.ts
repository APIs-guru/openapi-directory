import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetElectionDatesOfficeSoughtEnum {
    H = "H"
,    S = "S"
,    P = "P"
}


export class GetElectionDatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_district" })
  electionDistrict?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_party" })
  electionParty?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_state" })
  electionState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_type_id" })
  electionTypeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_create_date" })
  maxCreateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_election_date" })
  maxElectionDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_primary_general_date" })
  maxPrimaryGeneralDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_update_date" })
  maxUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_create_date" })
  minCreateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_election_date" })
  minElectionDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_primary_general_date" })
  minPrimaryGeneralDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_update_date" })
  minUpdateDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=office_sought" })
  officeSought?: GetElectionDatesOfficeSoughtEnum[];

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


export class GetElectionDatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetElectionDatesQueryParams;
}


export class GetElectionDatesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.OffsetInfo;

  @Metadata({ data: "json, name=results", elemType: shared.ElectionDate })
  results?: shared.ElectionDate[];
}


export class GetElectionDatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getElectionDatesDefaultApplicationJsonObject?: GetElectionDatesDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
