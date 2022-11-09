import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAddressXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateAddress = "AWSIESnowballJobManagementService.CreateAddress"
}


export class CreateAddressHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAddressXAmzTargetEnum;
}


export class CreateAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAddressRequest;
}


export class CreateAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAddressResult?: shared.CreateAddressResult;

  @Metadata()
  invalidAddressException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedAddressException?: any;
}
