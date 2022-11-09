import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchPoliceStopDataQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.address" })
  searchDbPoliceStopDataAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.date" })
  searchDbPoliceStopDataDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.ethnicity" })
  searchDbPoliceStopDataEthnicity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.minutes" })
  searchDbPoliceStopDataMinutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.race" })
  searchDbPoliceStopDataRace?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.resident" })
  searchDbPoliceStopDataResident?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.sex" })
  searchDbPoliceStopDataSex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPoliceStopDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchPoliceStopDataQueryParams;
}


export class SearchPoliceStopDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
