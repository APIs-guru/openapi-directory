import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchTypeMetametaFieldQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.database_column_size" })
  searchTypeMetametaFieldDatabaseColumnSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.datatype" })
  searchTypeMetametaFieldDatatype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.enumeration_values" })
  searchTypeMetametaFieldEnumerationValues?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.field_id" })
  searchTypeMetametaFieldFieldId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.field_index" })
  searchTypeMetametaFieldFieldIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.missing" })
  searchTypeMetametaFieldMissing?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.properties" })
  searchTypeMetametaFieldProperties?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.unit" })
  searchTypeMetametaFieldUnit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeMetametaFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTypeMetametaFieldQueryParams;
}


export class SearchTypeMetametaFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
