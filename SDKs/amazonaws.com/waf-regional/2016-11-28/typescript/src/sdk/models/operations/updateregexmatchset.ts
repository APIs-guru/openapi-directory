import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128UpdateRegexMatchSet = "AWSWAF_Regional_20161128.UpdateRegexMatchSet"
}


export class UpdateRegexMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateRegexMatchSetXAmzTargetEnum;
}


export class UpdateRegexMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRegexMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRegexMatchSetRequest;
}


export class UpdateRegexMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateRegexMatchSetResponse?: shared.UpdateRegexMatchSetResponse;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidOperationException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafNonexistentContainerException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
