import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchPropertySalesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_description" })
  searchDbPropertySalesBuildingDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_design" })
  searchDbPropertySalesBuildingDesign?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.buyer" })
  searchDbPropertySalesBuyer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.city" })
  searchDbPropertySalesCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.location" })
  searchDbPropertySalesLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.property_address" })
  searchDbPropertySalesPropertyAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_date" })
  searchDbPropertySalesSaleDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_price" })
  searchDbPropertySalesSalePrice?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.seller" })
  searchDbPropertySalesSeller?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.subdivision" })
  searchDbPropertySalesSubdivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.type" })
  searchDbPropertySalesType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.zipcode" })
  searchDbPropertySalesZipcode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPropertySalesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchPropertySalesQueryParams;
}


export class SearchPropertySalesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
