import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGeofenceCollectionHeaders extends SpeakeasyBase {
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

export enum CreateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class CreateGeofenceCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionName" })
  collectionName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: CreateGeofenceCollectionRequestBodyPricingPlanEnum;

  @Metadata({ data: "json, name=PricingPlanDataSource" })
  pricingPlanDataSource?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateGeofenceCollectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGeofenceCollectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGeofenceCollectionRequestBody;
}


export class CreateGeofenceCollectionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createGeofenceCollectionResponse?: shared.CreateGeofenceCollectionResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
