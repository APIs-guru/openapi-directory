import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBoulderCountyVoterDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.birth_year" })
  searchDbBoulderCountyVoterDetailsBirthYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.city_ward_district" })
  searchDbBoulderCountyVoterDetailsCityWardDistrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.congressional" })
  searchDbBoulderCountyVoterDetailsCongressional?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.first_name" })
  searchDbBoulderCountyVoterDetailsFirstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.gender" })
  searchDbBoulderCountyVoterDetailsGender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_name" })
  searchDbBoulderCountyVoterDetailsLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_updated_date" })
  searchDbBoulderCountyVoterDetailsLastUpdatedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.location" })
  searchDbBoulderCountyVoterDetailsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.mailing_zip_code" })
  searchDbBoulderCountyVoterDetailsMailingZipCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.municipality" })
  searchDbBoulderCountyVoterDetailsMunicipality?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.party" })
  searchDbBoulderCountyVoterDetailsParty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.precinct_code" })
  searchDbBoulderCountyVoterDetailsPrecinctCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.registration_date" })
  searchDbBoulderCountyVoterDetailsRegistrationDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_address" })
  searchDbBoulderCountyVoterDetailsResidentialAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_city" })
  searchDbBoulderCountyVoterDetailsResidentialCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.school_district" })
  searchDbBoulderCountyVoterDetailsSchoolDistrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_house" })
  searchDbBoulderCountyVoterDetailsStateHouse?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_senate" })
  searchDbBoulderCountyVoterDetailsStateSenate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.voter_status" })
  searchDbBoulderCountyVoterDetailsVoterStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBoulderCountyVoterDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBoulderCountyVoterDetailsQueryParams;
}


export class SearchBoulderCountyVoterDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
