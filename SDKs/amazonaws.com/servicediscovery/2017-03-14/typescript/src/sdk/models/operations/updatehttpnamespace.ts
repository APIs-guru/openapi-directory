import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateHttpNamespace = "Route53AutoNaming_v20170314.UpdateHttpNamespace"
}


export class UpdateHttpNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateHttpNamespaceXAmzTargetEnum;
}


export class UpdateHttpNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateHttpNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateHttpNamespaceRequest;
}


export class UpdateHttpNamespaceResponse extends SpeakeasyBase {
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
  updateHttpNamespaceResponse?: shared.UpdateHttpNamespaceResponse;
}
