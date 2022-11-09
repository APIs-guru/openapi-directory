import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBoulderCountyVoterDetailsQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbBoulderCountyVoterDetailsBirthYear?: number;
    searchDbBoulderCountyVoterDetailsCityWardDistrict?: string;
    searchDbBoulderCountyVoterDetailsCongressional?: string;
    searchDbBoulderCountyVoterDetailsFirstName?: string;
    searchDbBoulderCountyVoterDetailsGender?: string;
    searchDbBoulderCountyVoterDetailsLastName?: string;
    searchDbBoulderCountyVoterDetailsLastUpdatedDate?: string;
    searchDbBoulderCountyVoterDetailsLocation?: string;
    searchDbBoulderCountyVoterDetailsMailingZipCode?: string;
    searchDbBoulderCountyVoterDetailsMunicipality?: string;
    searchDbBoulderCountyVoterDetailsParty?: string;
    searchDbBoulderCountyVoterDetailsPrecinctCode?: string;
    searchDbBoulderCountyVoterDetailsRegistrationDate?: string;
    searchDbBoulderCountyVoterDetailsResidentialAddress?: string;
    searchDbBoulderCountyVoterDetailsResidentialCity?: string;
    searchDbBoulderCountyVoterDetailsSchoolDistrict?: string;
    searchDbBoulderCountyVoterDetailsStateHouse?: string;
    searchDbBoulderCountyVoterDetailsStateSenate?: string;
    searchDbBoulderCountyVoterDetailsVoterStatus?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderCountyVoterDetailsRequest extends SpeakeasyBase {
    queryParams: SearchBoulderCountyVoterDetailsQueryParams;
}
export declare class SearchBoulderCountyVoterDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
