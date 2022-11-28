import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBioTaxonomyQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.aliases" })
  searchBioTaxonomyAliases?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.division" })
  searchBioTaxonomyDivision?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.embl_code" })
  searchBioTaxonomyEmblCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.inherited_div" })
  searchBioTaxonomyInheritedDiv?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.bio_taxonomy.rank" })
  searchBioTaxonomyRank?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBioTaxonomyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBioTaxonomyQueryParams;
}


export class SearchBioTaxonomyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
