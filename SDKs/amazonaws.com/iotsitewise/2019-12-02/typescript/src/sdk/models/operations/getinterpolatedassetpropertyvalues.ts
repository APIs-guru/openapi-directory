import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetInterpolatedAssetPropertyValuesQualityEnum {
    Good = "GOOD",
    Bad = "BAD",
    Uncertain = "UNCERTAIN"
}


export class GetInterpolatedAssetPropertyValuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTimeInSeconds" })
  endTimeInSeconds: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTimeOffsetInNanos" })
  endTimeOffsetInNanos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intervalInSeconds" })
  intervalInSeconds: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intervalWindowInSeconds" })
  intervalWindowInSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" })
  propertyAlias?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality: GetInterpolatedAssetPropertyValuesQualityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeInSeconds" })
  startTimeInSeconds: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeOffsetInNanos" })
  startTimeOffsetInNanos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class GetInterpolatedAssetPropertyValuesHeaders extends SpeakeasyBase {
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


export class GetInterpolatedAssetPropertyValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInterpolatedAssetPropertyValuesQueryParams;

  @SpeakeasyMetadata()
  headers: GetInterpolatedAssetPropertyValuesHeaders;
}


export class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInterpolatedAssetPropertyValuesResponse?: shared.GetInterpolatedAssetPropertyValuesResponse;

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
