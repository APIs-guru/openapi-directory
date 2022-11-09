import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePrivateDnsNamespace = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"
}


export class CreatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePrivateDnsNamespaceXAmzTargetEnum;
}


export class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePrivateDnsNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePrivateDnsNamespaceRequest;
}


export class CreatePrivateDnsNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPrivateDnsNamespaceResponse?: shared.CreatePrivateDnsNamespaceResponse;

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
