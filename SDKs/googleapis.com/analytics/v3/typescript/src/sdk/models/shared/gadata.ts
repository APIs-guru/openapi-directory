import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GaDataColumnHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnType" })
  columnType?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GaDataDataTableCols extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GaDataDataTableRowsC extends SpeakeasyBase {
  @Metadata({ data: "json, name=v" })
  v?: string;
}


export class GaDataDataTableRows extends SpeakeasyBase {
  @Metadata({ data: "json, name=c", elemType: shared.GaDataDataTableRowsC })
  c?: GaDataDataTableRowsC[];
}


export class GaDataDataTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=cols", elemType: shared.GaDataDataTableCols })
  cols?: GaDataDataTableCols[];

  @Metadata({ data: "json, name=rows", elemType: shared.GaDataDataTableRows })
  rows?: GaDataDataTableRows[];
}


// GaDataProfileInfo
/** 
 * Information for the view (profile), for which the Analytics data was requested.
**/
export class GaDataProfileInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=profileName" })
  profileName?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// GaDataQuery
/** 
 * Analytics data request query parameters.
**/
export class GaDataQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @Metadata({ data: "json, name=end-date" })
  endDate?: string;

  @Metadata({ data: "json, name=filters" })
  filters?: string;

  @Metadata({ data: "json, name=ids" })
  ids?: string;

  @Metadata({ data: "json, name=max-results" })
  maxResults?: number;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=samplingLevel" })
  samplingLevel?: string;

  @Metadata({ data: "json, name=segment" })
  segment?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string[];

  @Metadata({ data: "json, name=start-date" })
  startDate?: string;

  @Metadata({ data: "json, name=start-index" })
  startIndex?: number;
}


// GaData
/** 
 * Analytics data for a given view (profile).
**/
export class GaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeaders", elemType: shared.GaDataColumnHeaders })
  columnHeaders?: GaDataColumnHeaders[];

  @Metadata({ data: "json, name=containsSampledData" })
  containsSampledData?: boolean;

  @Metadata({ data: "json, name=dataLastRefreshed" })
  dataLastRefreshed?: string;

  @Metadata({ data: "json, name=dataTable" })
  dataTable?: GaDataDataTable;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @Metadata({ data: "json, name=profileInfo" })
  profileInfo?: GaDataProfileInfo;

  @Metadata({ data: "json, name=query" })
  query?: GaDataQuery;

  @Metadata({ data: "json, name=rows" })
  rows?: string[][];

  @Metadata({ data: "json, name=sampleSize" })
  sampleSize?: string;

  @Metadata({ data: "json, name=sampleSpace" })
  sampleSpace?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @Metadata({ data: "json, name=totalsForAllResults" })
  totalsForAllResults?: Map<string, string>;
}
