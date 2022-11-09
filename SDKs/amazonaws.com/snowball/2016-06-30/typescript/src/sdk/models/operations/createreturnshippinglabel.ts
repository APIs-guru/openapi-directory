import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateReturnShippingLabelXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateReturnShippingLabel = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"
}


export class CreateReturnShippingLabelHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateReturnShippingLabelXAmzTargetEnum;
}


export class CreateReturnShippingLabelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateReturnShippingLabelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateReturnShippingLabelRequest;
}


export class CreateReturnShippingLabelResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createReturnShippingLabelResult?: shared.CreateReturnShippingLabelResult;

  @Metadata()
  invalidInputCombinationException?: any;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  returnShippingLabelAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;
}
