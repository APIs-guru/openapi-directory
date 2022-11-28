import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateServiceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateService = "Route53AutoNaming_v20170314.CreateService"
}


export class CreateServiceHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateServiceXAmzTargetEnum;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateServiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateServiceRequest;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createServiceResponse?: shared.CreateServiceResponse;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  namespaceNotFound?: any;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  serviceAlreadyExists?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyTagsException?: any;
}
