import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateIpSetXAmzTargetEnum {
    Awswaf20150824UpdateIpSet = "AWSWAF_20150824.UpdateIPSet"
}


export class UpdateIpSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateIpSetXAmzTargetEnum;
}


export class UpdateIpSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateIpSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateIpSetRequest;
}


export class UpdateIpSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateIpSetResponse?: shared.UpdateIpSetResponse;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidOperationException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafNonexistentContainerException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafReferencedItemException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
