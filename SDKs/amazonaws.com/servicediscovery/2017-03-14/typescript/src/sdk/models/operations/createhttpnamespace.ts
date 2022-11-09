import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateHttpNamespace = "Route53AutoNaming_v20170314.CreateHttpNamespace"
}


export class CreateHttpNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateHttpNamespaceXAmzTargetEnum;
}


export class CreateHttpNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateHttpNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateHttpNamespaceRequest;
}


export class CreateHttpNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createHttpNamespaceResponse?: shared.CreateHttpNamespaceResponse;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  namespaceAlreadyExists?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;
}
