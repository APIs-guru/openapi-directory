import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAssetPropertyAggregatesTimeOrderingEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class GetAssetPropertyAggregatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregateTypes" })
  aggregateTypes: shared.AggregateTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" })
  propertyAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=qualities" })
  qualities?: shared.QualityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOrdering" })
  timeOrdering?: GetAssetPropertyAggregatesTimeOrderingEnum;
}


export class GetAssetPropertyAggregatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetAssetPropertyAggregatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssetPropertyAggregatesQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssetPropertyAggregatesHeaders;
}


export class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAssetPropertyAggregatesResponse?: shared.GetAssetPropertyAggregatesResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
