import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchColoradoWaterRightsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.adjudication_date" })
  searchDbColoradoWaterRightsAdjudicationDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.appropriation_date" })
  searchDbColoradoWaterRightsAppropriationDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.comments" })
  searchDbColoradoWaterRightsComments?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.county" })
  searchDbColoradoWaterRightsCounty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_units" })
  searchDbColoradoWaterRightsDecreedUnits?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_uses" })
  searchDbColoradoWaterRightsDecreedUses?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.location" })
  searchDbColoradoWaterRightsLocation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.more_information" })
  searchDbColoradoWaterRightsMoreInformation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_absolute" })
  searchDbColoradoWaterRightsNetAbsolute?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_absolute" })
  searchDbColoradoWaterRightsNetApexAbsolute?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_conditional" })
  searchDbColoradoWaterRightsNetApexConditional?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_conditional" })
  searchDbColoradoWaterRightsNetConditional?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.priority_no" })
  searchDbColoradoWaterRightsPriorityNo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.seasonal_limits" })
  searchDbColoradoWaterRightsSeasonalLimits?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_name" })
  searchDbColoradoWaterRightsStructureName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_type" })
  searchDbColoradoWaterRightsStructureType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.water_source" })
  searchDbColoradoWaterRightsWaterSource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchColoradoWaterRightsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchColoradoWaterRightsQueryParams;
}


export class SearchColoradoWaterRightsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
