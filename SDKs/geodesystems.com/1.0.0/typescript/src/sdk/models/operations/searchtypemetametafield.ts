import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTypeMetametaFieldQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.database_column_size" })
  searchTypeMetametaFieldDatabaseColumnSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.datatype" })
  searchTypeMetametaFieldDatatype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.enumeration_values" })
  searchTypeMetametaFieldEnumerationValues?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.field_id" })
  searchTypeMetametaFieldFieldId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.field_index" })
  searchTypeMetametaFieldFieldIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.missing" })
  searchTypeMetametaFieldMissing?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.properties" })
  searchTypeMetametaFieldProperties?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_metameta_field.unit" })
  searchTypeMetametaFieldUnit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTypeMetametaFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTypeMetametaFieldQueryParams;
}


export class SearchTypeMetametaFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
