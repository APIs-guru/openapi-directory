import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGeofenceCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" })
  collectionName: string;
}


export class UpdateGeofenceCollectionHeaders extends SpeakeasyBase {
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

export enum UpdateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}


export class UpdateGeofenceCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan?: UpdateGeofenceCollectionRequestBodyPricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;
}


export class UpdateGeofenceCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGeofenceCollectionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateGeofenceCollectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGeofenceCollectionRequestBody;
}


export class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateGeofenceCollectionResponse?: shared.UpdateGeofenceCollectionResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
