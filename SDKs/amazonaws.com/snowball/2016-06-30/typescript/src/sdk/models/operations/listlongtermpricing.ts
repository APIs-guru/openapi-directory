import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListLongTermPricingXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListLongTermPricing = "AWSIESnowballJobManagementService.ListLongTermPricing"
}


export class ListLongTermPricingHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLongTermPricingXAmzTargetEnum;
}


export class ListLongTermPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListLongTermPricingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListLongTermPricingRequest;
}


export class ListLongTermPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  listLongTermPricingResult?: shared.ListLongTermPricingResult;

  @Metadata()
  statusCode: number;
}
