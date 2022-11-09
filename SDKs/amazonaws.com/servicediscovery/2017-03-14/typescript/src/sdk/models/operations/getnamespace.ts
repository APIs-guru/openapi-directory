import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314GetNamespace = "Route53AutoNaming_v20170314.GetNamespace"
}


export class GetNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetNamespaceXAmzTargetEnum;
}


export class GetNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetNamespaceRequest;
}


export class GetNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNamespaceResponse?: shared.GetNamespaceResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  namespaceNotFound?: any;

  @Metadata()
  statusCode: number;
}
