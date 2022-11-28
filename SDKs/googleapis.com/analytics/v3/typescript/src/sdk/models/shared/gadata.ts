import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GaDataColumnHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnType" })
  columnType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GaDataDataTableCols extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GaDataDataTableRowsC extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v" })
  v?: string;
}


export class GaDataDataTableRows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=c", elemType: GaDataDataTableRowsC })
  c?: GaDataDataTableRowsC[];
}


export class GaDataDataTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cols", elemType: GaDataDataTableCols })
  cols?: GaDataDataTableCols[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GaDataDataTableRows })
  rows?: GaDataDataTableRows[];
}


// GaDataProfileInfo
/** 
 * Information for the view (profile), for which the Analytics data was requested.
**/
export class GaDataProfileInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=profileName" })
  profileName?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// GaDataQuery
/** 
 * Analytics data request query parameters.
**/
export class GaDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @SpeakeasyMetadata({ data: "json, name=end-date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string;

  @SpeakeasyMetadata({ data: "json, name=max-results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=samplingLevel" })
  samplingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "json, name=start-date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=start-index" })
  startIndex?: number;
}


// GaData
/** 
 * Analytics data for a given view (profile).
**/
export class GaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: GaDataColumnHeaders })
  columnHeaders?: GaDataColumnHeaders[];

  @SpeakeasyMetadata({ data: "json, name=containsSampledData" })
  containsSampledData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataLastRefreshed" })
  dataLastRefreshed?: string;

  @SpeakeasyMetadata({ data: "json, name=dataTable" })
  dataTable?: GaDataDataTable;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=profileInfo" })
  profileInfo?: GaDataProfileInfo;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GaDataQuery;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: string[][];

  @SpeakeasyMetadata({ data: "json, name=sampleSize" })
  sampleSize?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleSpace" })
  sampleSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalsForAllResults" })
  totalsForAllResults?: Map<string, string>;
}
