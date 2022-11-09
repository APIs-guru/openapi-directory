import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRouteCalculatorHeaders extends SpeakeasyBase {
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

export enum CreateRouteCalculatorRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage"
,    MobileAssetTracking = "MobileAssetTracking"
,    MobileAssetManagement = "MobileAssetManagement"
}


export class CreateRouteCalculatorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculatorName" })
  calculatorName: string;

  @Metadata({ data: "json, name=DataSource" })
  dataSource: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PricingPlan" })
  pricingPlan: CreateRouteCalculatorRequestBodyPricingPlanEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateRouteCalculatorRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRouteCalculatorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRouteCalculatorRequestBody;
}


export class CreateRouteCalculatorResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createRouteCalculatorResponse?: shared.CreateRouteCalculatorResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
