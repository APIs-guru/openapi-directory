import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RealtimeDataColumnHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnType" })
  columnType?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// RealtimeDataProfileInfo
/** 
 * Information for the view (profile), for which the real time data was requested.
**/
export class RealtimeDataProfileInfo extends SpeakeasyBase {
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


// RealtimeDataQuery
/** 
 * Real time data request query parameters.
**/
export class RealtimeDataQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @Metadata({ data: "json, name=filters" })
  filters?: string;

  @Metadata({ data: "json, name=ids" })
  ids?: string;

  @Metadata({ data: "json, name=max-results" })
  maxResults?: number;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=sort" })
  sort?: string[];
}


// RealtimeData
/** 
 * Real time data for a given view (profile).
**/
export class RealtimeData extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeaders", elemType: shared.RealtimeDataColumnHeaders })
  columnHeaders?: RealtimeDataColumnHeaders[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileInfo" })
  profileInfo?: RealtimeDataProfileInfo;

  @Metadata({ data: "json, name=query" })
  query?: RealtimeDataQuery;

  @Metadata({ data: "json, name=rows" })
  rows?: string[][];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @Metadata({ data: "json, name=totalsForAllResults" })
  totalsForAllResults?: Map<string, string>;
}
