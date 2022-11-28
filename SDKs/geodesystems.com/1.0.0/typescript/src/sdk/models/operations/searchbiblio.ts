import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchBiblioQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.biblio.institution" })
  searchBiblioInstitution?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.biblio.other_authors" })
  searchBiblioOtherAuthors?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.biblio.primary_author" })
  searchBiblioPrimaryAuthor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.biblio.publication" })
  searchBiblioPublication?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.biblio.type" })
  searchBiblioType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchBiblioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchBiblioQueryParams;
}


export class SearchBiblioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
