import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePrimaryRegionXAmzTargetEnum {
    TrentServiceUpdatePrimaryRegion = "TrentService.UpdatePrimaryRegion"
}


export class UpdatePrimaryRegionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePrimaryRegionXAmzTargetEnum;
}


export class UpdatePrimaryRegionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePrimaryRegionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePrimaryRegionRequest;
}


export class UpdatePrimaryRegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disabledException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
