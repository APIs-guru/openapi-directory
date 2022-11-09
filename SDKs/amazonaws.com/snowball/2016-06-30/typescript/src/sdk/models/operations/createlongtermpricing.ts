import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateLongTermPricing = "AWSIESnowballJobManagementService.CreateLongTermPricing"
}


export class CreateLongTermPricingHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLongTermPricingXAmzTargetEnum;
}


export class CreateLongTermPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLongTermPricingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLongTermPricingRequest;
}


export class CreateLongTermPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLongTermPricingResult?: shared.CreateLongTermPricingResult;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  statusCode: number;
}
