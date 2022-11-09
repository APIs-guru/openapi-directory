import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypeMetametaDictionaryQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.dictionary_type" })
  searchTypeMetametaDictionaryDictionaryType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.field_index" })
  searchTypeMetametaDictionaryFieldIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.handler_class" })
  searchTypeMetametaDictionaryHandlerClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.isgroup" })
  searchTypeMetametaDictionaryIsgroup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.properties" })
  searchTypeMetametaDictionaryProperties?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.short_name" })
  searchTypeMetametaDictionaryShortName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.super_type" })
  searchTypeMetametaDictionarySuperType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_dictionary.wiki_text" })
  searchTypeMetametaDictionaryWikiText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeMetametaDictionaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypeMetametaDictionaryQueryParams;
}


export class SearchTypeMetametaDictionaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
