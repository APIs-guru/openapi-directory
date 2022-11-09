import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class McfDataColumnHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnType" })
  columnType?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// McfDataProfileInfo
/** 
 * Information for the view (profile), for which the Analytics data was requested.
**/
export class McfDataProfileInfo extends SpeakeasyBase {
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


// McfDataQuery
/** 
 * Analytics data request query parameters.
**/
export class McfDataQuery extends SpeakeasyBase {
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


export class McfDataRowsConversionPathValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=interactionType" })
  interactionType?: string;

  @Metadata({ data: "json, name=nodeValue" })
  nodeValue?: string;
}


// McfDataRows
/** 
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
**/
export class McfDataRows extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversionPathValue", elemType: shared.McfDataRowsConversionPathValue })
  conversionPathValue?: McfDataRowsConversionPathValue[];

  @Metadata({ data: "json, name=primitiveValue" })
  primitiveValue?: string;
}


// McfData
/** 
 * Multi-Channel Funnels data for a given view (profile).
**/
export class McfData extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeaders", elemType: shared.McfDataColumnHeaders })
  columnHeaders?: McfDataColumnHeaders[];

  @Metadata({ data: "json, name=containsSampledData" })
  containsSampledData?: boolean;

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
  profileInfo?: McfDataProfileInfo;

  @Metadata({ data: "json, name=query" })
  query?: McfDataQuery;

  @Metadata({ data: "json, name=rows", elemType: shared.McfDataRows, elemDepth: 2 })
  rows?: McfDataRows[][];

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
