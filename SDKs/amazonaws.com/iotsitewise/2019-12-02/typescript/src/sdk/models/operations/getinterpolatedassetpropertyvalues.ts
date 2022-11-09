import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetInterpolatedAssetPropertyValuesQualityEnum {
    Good = "GOOD"
,    Bad = "BAD"
,    Uncertain = "UNCERTAIN"
}


export class GetInterpolatedAssetPropertyValuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=assetId" })
  assetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTimeInSeconds" })
  endTimeInSeconds: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTimeOffsetInNanos" })
  endTimeOffsetInNanos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=intervalInSeconds" })
  intervalInSeconds: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=intervalWindowInSeconds" })
  intervalWindowInSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" })
  propertyAlias?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=propertyId" })
  propertyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality: GetInterpolatedAssetPropertyValuesQualityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeInSeconds" })
  startTimeInSeconds: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeOffsetInNanos" })
  startTimeOffsetInNanos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class GetInterpolatedAssetPropertyValuesHeaders extends SpeakeasyBase {
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


export class GetInterpolatedAssetPropertyValuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInterpolatedAssetPropertyValuesQueryParams;

  @Metadata()
  headers: GetInterpolatedAssetPropertyValuesHeaders;
}


export class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInterpolatedAssetPropertyValuesResponse?: shared.GetInterpolatedAssetPropertyValuesResponse;

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
