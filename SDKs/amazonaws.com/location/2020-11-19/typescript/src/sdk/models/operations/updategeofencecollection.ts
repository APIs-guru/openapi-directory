import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGeofenceCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" })
  collectionName: string;
}


export class UpdateGeofenceCollectionHeaders extends SpeakeasyBase {
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

export enum UpdateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class UpdateGeofenceCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan?: UpdateGeofenceCollectionRequestBodyPricingPlanEnum;

  @Metadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;
}


export class UpdateGeofenceCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGeofenceCollectionPathParams;

  @Metadata()
  headers: UpdateGeofenceCollectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGeofenceCollectionRequestBody;
}


export class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateGeofenceCollectionResponse?: shared.UpdateGeofenceCollectionResponse;

  @Metadata()
  validationException?: any;
}
