import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMapHeaders extends SpeakeasyBase {
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


// CreateMapRequestBodyConfiguration
/** 
 * Specifies the map tile style selected from an available provider.
**/
export class CreateMapRequestBodyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Style" })
  style?: string;
}

export enum CreateMapRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class CreateMapRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration: CreateMapRequestBodyConfiguration;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MapName" })
  mapName: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: CreateMapRequestBodyPricingPlanEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateMapRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMapHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMapRequestBody;
}


export class CreateMapResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createMapResponse?: shared.CreateMapResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
