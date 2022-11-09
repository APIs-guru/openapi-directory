import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchCommunityResourceQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.community_resource.address" })
  searchCommunityResourceAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.community_resource.city" })
  searchCommunityResourceCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.community_resource.resource_type" })
  searchCommunityResourceResourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.community_resource.state" })
  searchCommunityResourceState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.community_resource.zipcode" })
  searchCommunityResourceZipcode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchCommunityResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCommunityResourceQueryParams;
}


export class SearchCommunityResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
