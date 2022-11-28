import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRouteCalculatorHeaders extends SpeakeasyBase {
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

export enum CreateRouteCalculatorRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}


export class CreateRouteCalculatorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=PricingPlan" })
  pricingPlan: CreateRouteCalculatorRequestBodyPricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateRouteCalculatorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRouteCalculatorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRouteCalculatorRequestBody;
}


export class CreateRouteCalculatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRouteCalculatorResponse?: shared.CreateRouteCalculatorResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
