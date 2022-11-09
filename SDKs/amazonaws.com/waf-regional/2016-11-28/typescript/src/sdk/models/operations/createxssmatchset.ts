import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateXssMatchSetXAmzTargetEnum {
    AwswafRegional20161128CreateXssMatchSet = "AWSWAF_Regional_20161128.CreateXssMatchSet"
}


export class CreateXssMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateXssMatchSetXAmzTargetEnum;
}


export class CreateXssMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateXssMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateXssMatchSetRequest;
}


export class CreateXssMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createXssMatchSetResponse?: shared.CreateXssMatchSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
