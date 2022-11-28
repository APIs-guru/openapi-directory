import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class McfDataColumnHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnType" })
  columnType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// McfDataProfileInfo
/** 
 * Information for the view (profile), for which the Analytics data was requested.
**/
export class McfDataProfileInfo extends SpeakeasyBase {
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


// McfDataQuery
/** 
 * Analytics data request query parameters.
**/
export class McfDataQuery extends SpeakeasyBase {
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


export class McfDataRowsConversionPathValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interactionType" })
  interactionType?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeValue" })
  nodeValue?: string;
}


// McfDataRows
/** 
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
**/
export class McfDataRows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionPathValue", elemType: McfDataRowsConversionPathValue })
  conversionPathValue?: McfDataRowsConversionPathValue[];

  @SpeakeasyMetadata({ data: "json, name=primitiveValue" })
  primitiveValue?: string;
}


// McfData
/** 
 * Multi-Channel Funnels data for a given view (profile).
**/
export class McfData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeaders", elemType: McfDataColumnHeaders })
  columnHeaders?: McfDataColumnHeaders[];

  @SpeakeasyMetadata({ data: "json, name=containsSampledData" })
  containsSampledData?: boolean;

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
  profileInfo?: McfDataProfileInfo;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: McfDataQuery;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: McfDataRows, elemDepth: 2 })
  rows?: McfDataRows[][];

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
