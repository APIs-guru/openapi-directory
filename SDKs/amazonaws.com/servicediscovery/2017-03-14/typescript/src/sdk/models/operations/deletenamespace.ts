import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteNamespace = "Route53AutoNaming_v20170314.DeleteNamespace"
}


export class DeleteNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteNamespaceXAmzTargetEnum;
}


export class DeleteNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteNamespaceRequest;
}


export class DeleteNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteNamespaceResponse?: shared.DeleteNamespaceResponse;

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
}
