import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBolderRentalHousingQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.bldgtype" })
  searchDbBolderRentalHousingBldgtype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.company" })
  searchDbBolderRentalHousingCompany?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.complexnm" })
  searchDbBolderRentalHousingComplexnm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.dwellunits" })
  searchDbBolderRentalHousingDwellunits?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.engcompl" })
  searchDbBolderRentalHousingEngcompl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licenseexp" })
  searchDbBolderRentalHousingLicenseexp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licensenum" })
  searchDbBolderRentalHousingLicensenum?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.location" })
  searchDbBolderRentalHousingLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.name" })
  searchDbBolderRentalHousingName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.neighbrhd" })
  searchDbBolderRentalHousingNeighbrhd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_1" })
  searchDbBolderRentalHousingPerson1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_2" })
  searchDbBolderRentalHousingPerson2?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.persontype" })
  searchDbBolderRentalHousingPersontype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_coname" })
  searchDbBolderRentalHousingPpl1Coname?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_role" })
  searchDbBolderRentalHousingPpl1Role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_coname" })
  searchDbBolderRentalHousingPpl2Coname?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_role" })
  searchDbBolderRentalHousingPpl2Role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.propaddr1" })
  searchDbBolderRentalHousingPropaddr1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.rentaltype" })
  searchDbBolderRentalHousingRentaltype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.roomunits" })
  searchDbBolderRentalHousingRoomunits?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBolderRentalHousingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBolderRentalHousingQueryParams;
}


export class SearchBolderRentalHousingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
