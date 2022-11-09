import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchProjectSiteQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.country" })
  searchProjectSiteCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.county" })
  searchProjectSiteCounty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.network" })
  searchProjectSiteNetwork?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.short_name" })
  searchProjectSiteShortName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.site_type" })
  searchProjectSiteSiteType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.state" })
  searchProjectSiteState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.project_site.status" })
  searchProjectSiteStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchProjectSiteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchProjectSiteQueryParams;
}


export class SearchProjectSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
