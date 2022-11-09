import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBolderRentalHousingQueryParams extends SpeakeasyBase {
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
    searchDbBolderRentalHousingBldgtype?: string;
    searchDbBolderRentalHousingCompany?: string;
    searchDbBolderRentalHousingComplexnm?: string;
    searchDbBolderRentalHousingDwellunits?: number;
    searchDbBolderRentalHousingEngcompl?: string;
    searchDbBolderRentalHousingLicenseexp?: string;
    searchDbBolderRentalHousingLicensenum?: string;
    searchDbBolderRentalHousingLocation?: string;
    searchDbBolderRentalHousingName?: string;
    searchDbBolderRentalHousingNeighbrhd?: string;
    searchDbBolderRentalHousingPerson1?: string;
    searchDbBolderRentalHousingPerson2?: string;
    searchDbBolderRentalHousingPersontype?: string;
    searchDbBolderRentalHousingPpl1Coname?: string;
    searchDbBolderRentalHousingPpl1Role?: string;
    searchDbBolderRentalHousingPpl2Coname?: string;
    searchDbBolderRentalHousingPpl2Role?: string;
    searchDbBolderRentalHousingPropaddr1?: string;
    searchDbBolderRentalHousingRentaltype?: string;
    searchDbBolderRentalHousingRoomunits?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBolderRentalHousingRequest extends SpeakeasyBase {
    queryParams: SearchBolderRentalHousingQueryParams;
}
export declare class SearchBolderRentalHousingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
