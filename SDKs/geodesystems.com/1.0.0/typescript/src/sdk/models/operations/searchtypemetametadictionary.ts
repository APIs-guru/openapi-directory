import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypeMetametaDictionaryQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.dictionary_type" })
  searchTypeMetametaDictionaryDictionaryType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.field_index" })
  searchTypeMetametaDictionaryFieldIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.handler_class" })
  searchTypeMetametaDictionaryHandlerClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.isgroup" })
  searchTypeMetametaDictionaryIsgroup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.properties" })
  searchTypeMetametaDictionaryProperties?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.short_name" })
  searchTypeMetametaDictionaryShortName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.super_type" })
  searchTypeMetametaDictionarySuperType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.wiki_text" })
  searchTypeMetametaDictionaryWikiText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeMetametaDictionaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypeMetametaDictionaryQueryParams;
}


export class SearchTypeMetametaDictionaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
