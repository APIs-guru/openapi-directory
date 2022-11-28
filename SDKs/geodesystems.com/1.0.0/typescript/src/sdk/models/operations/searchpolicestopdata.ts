import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchPoliceStopDataQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.address" })
  searchDbPoliceStopDataAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.date" })
  searchDbPoliceStopDataDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.ethnicity" })
  searchDbPoliceStopDataEthnicity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.minutes" })
  searchDbPoliceStopDataMinutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.race" })
  searchDbPoliceStopDataRace?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.resident" })
  searchDbPoliceStopDataResident?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.sex" })
  searchDbPoliceStopDataSex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchPoliceStopDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchPoliceStopDataQueryParams;
}


export class SearchPoliceStopDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
