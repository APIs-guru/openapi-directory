import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePublicDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePublicDnsNamespace = "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace"
}


export class UpdatePublicDnsNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePublicDnsNamespaceXAmzTargetEnum;
}


export class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePublicDnsNamespaceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePublicDnsNamespaceRequest;
}


export class UpdatePublicDnsNamespaceResponse extends SpeakeasyBase {
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
  updatePublicDnsNamespaceResponse?: shared.UpdatePublicDnsNamespaceResponse;
}
