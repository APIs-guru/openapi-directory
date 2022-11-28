import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchColoradoWaterRightsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.adjudication_date" })
  searchDbColoradoWaterRightsAdjudicationDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.appropriation_date" })
  searchDbColoradoWaterRightsAppropriationDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.comments" })
  searchDbColoradoWaterRightsComments?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.county" })
  searchDbColoradoWaterRightsCounty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_units" })
  searchDbColoradoWaterRightsDecreedUnits?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_uses" })
  searchDbColoradoWaterRightsDecreedUses?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.location" })
  searchDbColoradoWaterRightsLocation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.more_information" })
  searchDbColoradoWaterRightsMoreInformation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_absolute" })
  searchDbColoradoWaterRightsNetAbsolute?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_absolute" })
  searchDbColoradoWaterRightsNetApexAbsolute?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_conditional" })
  searchDbColoradoWaterRightsNetApexConditional?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_conditional" })
  searchDbColoradoWaterRightsNetConditional?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.priority_no" })
  searchDbColoradoWaterRightsPriorityNo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.seasonal_limits" })
  searchDbColoradoWaterRightsSeasonalLimits?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_name" })
  searchDbColoradoWaterRightsStructureName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_type" })
  searchDbColoradoWaterRightsStructureType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.water_source" })
  searchDbColoradoWaterRightsWaterSource?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchColoradoWaterRightsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchColoradoWaterRightsQueryParams;
}


export class SearchColoradoWaterRightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
