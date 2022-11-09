import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePrivateDnsNamespace = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"
}


export class UpdatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePrivateDnsNamespaceXAmzTargetEnum;
}


export class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePrivateDnsNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePrivateDnsNamespaceRequest;
}


export class UpdatePrivateDnsNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  namespaceNotFound?: any;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePrivateDnsNamespaceResponse?: shared.UpdatePrivateDnsNamespaceResponse;
}
