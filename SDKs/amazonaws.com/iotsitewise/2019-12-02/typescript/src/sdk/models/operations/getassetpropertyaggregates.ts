import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAssetPropertyAggregatesTimeOrderingEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class GetAssetPropertyAggregatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregateTypes" })
  aggregateTypes: shared.AggregateTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=assetId" })
  assetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" })
  propertyAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=propertyId" })
  propertyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=qualities" })
  qualities?: shared.QualityEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOrdering" })
  timeOrdering?: GetAssetPropertyAggregatesTimeOrderingEnum;
}


export class GetAssetPropertyAggregatesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetAssetPropertyAggregatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssetPropertyAggregatesQueryParams;

  @Metadata()
  headers: GetAssetPropertyAggregatesHeaders;
}


export class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAssetPropertyAggregatesResponse?: shared.GetAssetPropertyAggregatesResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
