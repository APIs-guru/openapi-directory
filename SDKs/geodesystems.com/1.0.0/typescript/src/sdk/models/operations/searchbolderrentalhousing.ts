import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBolderRentalHousingQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.bldgtype" })
  searchDbBolderRentalHousingBldgtype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.company" })
  searchDbBolderRentalHousingCompany?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.complexnm" })
  searchDbBolderRentalHousingComplexnm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.dwellunits" })
  searchDbBolderRentalHousingDwellunits?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.engcompl" })
  searchDbBolderRentalHousingEngcompl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licenseexp" })
  searchDbBolderRentalHousingLicenseexp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licensenum" })
  searchDbBolderRentalHousingLicensenum?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.location" })
  searchDbBolderRentalHousingLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.name" })
  searchDbBolderRentalHousingName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.neighbrhd" })
  searchDbBolderRentalHousingNeighbrhd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_1" })
  searchDbBolderRentalHousingPerson1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_2" })
  searchDbBolderRentalHousingPerson2?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.persontype" })
  searchDbBolderRentalHousingPersontype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_coname" })
  searchDbBolderRentalHousingPpl1Coname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_role" })
  searchDbBolderRentalHousingPpl1Role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_coname" })
  searchDbBolderRentalHousingPpl2Coname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_role" })
  searchDbBolderRentalHousingPpl2Role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.propaddr1" })
  searchDbBolderRentalHousingPropaddr1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.rentaltype" })
  searchDbBolderRentalHousingRentaltype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.roomunits" })
  searchDbBolderRentalHousingRoomunits?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBolderRentalHousingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBolderRentalHousingQueryParams;
}


export class SearchBolderRentalHousingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
