import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateServiceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateService = "Route53AutoNaming_v20170314.CreateService"
}


export class CreateServiceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateServiceXAmzTargetEnum;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateServiceRequest;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createServiceResponse?: shared.CreateServiceResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  namespaceNotFound?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  serviceAlreadyExists?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;
}
