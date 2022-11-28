import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchProjectSiteQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.country" })
  searchProjectSiteCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.county" })
  searchProjectSiteCounty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.network" })
  searchProjectSiteNetwork?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.short_name" })
  searchProjectSiteShortName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.site_type" })
  searchProjectSiteSiteType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.state" })
  searchProjectSiteState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.project_site.status" })
  searchProjectSiteStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchProjectSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchProjectSiteQueryParams;
}


export class SearchProjectSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
