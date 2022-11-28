import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePrivateDnsNamespace = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"
}


export class UpdatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePrivateDnsNamespaceXAmzTargetEnum;
}


export class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePrivateDnsNamespaceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePrivateDnsNamespaceRequest;
}


export class UpdatePrivateDnsNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  duplicateRequest?: any;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  namespaceNotFound?: any;

  @SpeakeasyMetadata()
  resourceInUse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePrivateDnsNamespaceResponse?: shared.UpdatePrivateDnsNamespaceResponse;
}
