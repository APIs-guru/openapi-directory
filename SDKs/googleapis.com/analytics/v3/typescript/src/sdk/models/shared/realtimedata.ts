import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RealtimeDataColumnHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnType" })
  columnType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// RealtimeDataProfileInfo
/** 
 * Information for the view (profile), for which the real time data was requested.
**/
export class RealtimeDataProfileInfo extends SpeakeasyBase {
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


// RealtimeDataQuery
/** 
 * Real time data request query parameters.
**/
export class RealtimeDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string;

  @SpeakeasyMetadata({ data: "json, name=max-results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string[];
}


// RealtimeData
/** 
 * Real time data for a given view (profile).
**/
export class RealtimeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: RealtimeDataColumnHeaders })
  columnHeaders?: RealtimeDataColumnHeaders[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileInfo" })
  profileInfo?: RealtimeDataProfileInfo;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: RealtimeDataQuery;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: string[][];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalsForAllResults" })
  totalsForAllResults?: Map<string, string>;
}
