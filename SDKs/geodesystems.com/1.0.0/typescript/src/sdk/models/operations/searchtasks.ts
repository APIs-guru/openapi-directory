import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchTasksQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.assignedto" })
  searchDbTasksAssignedto?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.complete" })
  searchDbTasksComplete?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.enddate" })
  searchDbTasksEnddate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.priority" })
  searchDbTasksPriority?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.startdate" })
  searchDbTasksStartdate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.status" })
  searchDbTasksStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_tasks.title" })
  searchDbTasksTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTasksQueryParams;
}


export class SearchTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
