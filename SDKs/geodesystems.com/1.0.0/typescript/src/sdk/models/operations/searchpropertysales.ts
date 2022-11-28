import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchPropertySalesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_description" })
  searchDbPropertySalesBuildingDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_design" })
  searchDbPropertySalesBuildingDesign?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.buyer" })
  searchDbPropertySalesBuyer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.city" })
  searchDbPropertySalesCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.location" })
  searchDbPropertySalesLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.property_address" })
  searchDbPropertySalesPropertyAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_date" })
  searchDbPropertySalesSaleDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_price" })
  searchDbPropertySalesSalePrice?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.seller" })
  searchDbPropertySalesSeller?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.subdivision" })
  searchDbPropertySalesSubdivision?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.type" })
  searchDbPropertySalesType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.zipcode" })
  searchDbPropertySalesZipcode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPropertySalesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchPropertySalesQueryParams;
}


export class SearchPropertySalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
