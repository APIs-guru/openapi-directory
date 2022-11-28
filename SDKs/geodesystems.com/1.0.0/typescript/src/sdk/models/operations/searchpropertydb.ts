import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchPropertydbQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.address" })
  searchDbPropertydbAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.building_type" })
  searchDbPropertydbBuildingType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.city" })
  searchDbPropertydbCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.house_size" })
  searchDbPropertydbHouseSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.location" })
  searchDbPropertydbLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_acres" })
  searchDbPropertydbLotAcres?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_sqft" })
  searchDbPropertydbLotSqft?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.owner" })
  searchDbPropertydbOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.price_sqft" })
  searchDbPropertydbPriceSqft?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.property_id" })
  searchDbPropertydbPropertyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.state" })
  searchDbPropertydbState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.value" })
  searchDbPropertydbValue?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPropertydbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchPropertydbQueryParams;
}


export class SearchPropertydbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
