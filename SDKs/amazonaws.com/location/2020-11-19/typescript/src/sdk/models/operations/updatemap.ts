import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MapName" })
  mapName: string;
}


export class UpdateMapHeaders extends SpeakeasyBase {
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

export enum UpdateMapRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class UpdateMapRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan?: UpdateMapRequestBodyPricingPlanEnum;
}


export class UpdateMapRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMapPathParams;

  @Metadata()
  headers: UpdateMapHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateMapRequestBody;
}


export class UpdateMapResponse extends SpeakeasyBase {
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
  updateMapResponse?: shared.UpdateMapResponse;

  @Metadata()
  validationException?: any;
}
