import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRegexPatternSetXAmzTargetEnum {
    Awswaf20150824GetRegexPatternSet = "AWSWAF_20150824.GetRegexPatternSet"
}


export class GetRegexPatternSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRegexPatternSetXAmzTargetEnum;
}


export class GetRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRegexPatternSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRegexPatternSetRequest;
}


export class GetRegexPatternSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRegexPatternSetResponse?: shared.GetRegexPatternSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
