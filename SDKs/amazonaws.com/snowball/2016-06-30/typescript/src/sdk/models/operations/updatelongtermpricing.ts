import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateLongTermPricing = "AWSIESnowballJobManagementService.UpdateLongTermPricing"
}


export class UpdateLongTermPricingHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateLongTermPricingXAmzTargetEnum;
}


export class UpdateLongTermPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateLongTermPricingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateLongTermPricingRequest;
}


export class UpdateLongTermPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLongTermPricingResult?: Map<string, any>;
}
