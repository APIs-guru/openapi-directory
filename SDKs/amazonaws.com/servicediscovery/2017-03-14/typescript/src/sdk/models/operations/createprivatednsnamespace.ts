import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePrivateDnsNamespace = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"
}


export class CreatePrivateDnsNamespaceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePrivateDnsNamespaceXAmzTargetEnum;
}


export class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePrivateDnsNamespaceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreatePrivateDnsNamespaceRequest;
}


export class CreatePrivateDnsNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPrivateDnsNamespaceResponse?: shared.CreatePrivateDnsNamespaceResponse;

  @SpeakeasyMetadata()
  duplicateRequest?: any;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  namespaceAlreadyExists?: any;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyTagsException?: any;
}
