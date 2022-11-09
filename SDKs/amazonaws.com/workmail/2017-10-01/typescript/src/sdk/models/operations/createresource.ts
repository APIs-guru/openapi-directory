import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateResourceXAmzTargetEnum {
    WorkMailServiceCreateResource = "WorkMailService.CreateResource"
}


export class CreateResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateResourceXAmzTargetEnum;
}


export class CreateResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateResourceRequest;
}


export class CreateResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createResourceResponse?: shared.CreateResourceResponse;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  nameAvailabilityException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  reservedNameException?: any;

  @Metadata()
  statusCode: number;
}
