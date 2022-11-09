import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBoulderCountyVoterDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.birth_year" })
  searchDbBoulderCountyVoterDetailsBirthYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.city_ward_district" })
  searchDbBoulderCountyVoterDetailsCityWardDistrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.congressional" })
  searchDbBoulderCountyVoterDetailsCongressional?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.first_name" })
  searchDbBoulderCountyVoterDetailsFirstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.gender" })
  searchDbBoulderCountyVoterDetailsGender?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_name" })
  searchDbBoulderCountyVoterDetailsLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_updated_date" })
  searchDbBoulderCountyVoterDetailsLastUpdatedDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.location" })
  searchDbBoulderCountyVoterDetailsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.mailing_zip_code" })
  searchDbBoulderCountyVoterDetailsMailingZipCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.municipality" })
  searchDbBoulderCountyVoterDetailsMunicipality?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.party" })
  searchDbBoulderCountyVoterDetailsParty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.precinct_code" })
  searchDbBoulderCountyVoterDetailsPrecinctCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.registration_date" })
  searchDbBoulderCountyVoterDetailsRegistrationDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_address" })
  searchDbBoulderCountyVoterDetailsResidentialAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_city" })
  searchDbBoulderCountyVoterDetailsResidentialCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.school_district" })
  searchDbBoulderCountyVoterDetailsSchoolDistrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_house" })
  searchDbBoulderCountyVoterDetailsStateHouse?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_senate" })
  searchDbBoulderCountyVoterDetailsStateSenate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.voter_status" })
  searchDbBoulderCountyVoterDetailsVoterStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderCountyVoterDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBoulderCountyVoterDetailsQueryParams;
}


export class SearchBoulderCountyVoterDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
