import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchPropertydbQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.address" })
  searchDbPropertydbAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.building_type" })
  searchDbPropertydbBuildingType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.city" })
  searchDbPropertydbCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.house_size" })
  searchDbPropertydbHouseSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.location" })
  searchDbPropertydbLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_acres" })
  searchDbPropertydbLotAcres?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_sqft" })
  searchDbPropertydbLotSqft?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.owner" })
  searchDbPropertydbOwner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.price_sqft" })
  searchDbPropertydbPriceSqft?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.property_id" })
  searchDbPropertydbPropertyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.state" })
  searchDbPropertydbState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.value" })
  searchDbPropertydbValue?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPropertydbRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchPropertydbQueryParams;
}


export class SearchPropertydbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
