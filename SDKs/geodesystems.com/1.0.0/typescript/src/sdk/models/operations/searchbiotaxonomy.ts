import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchBioTaxonomyQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.aliases" })
  searchBioTaxonomyAliases?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.division" })
  searchBioTaxonomyDivision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.embl_code" })
  searchBioTaxonomyEmblCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.inherited_div" })
  searchBioTaxonomyInheritedDiv?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.rank" })
  searchBioTaxonomyRank?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBioTaxonomyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchBioTaxonomyQueryParams;
}


export class SearchBioTaxonomyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
