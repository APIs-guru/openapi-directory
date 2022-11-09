import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRegexPatternSetXAmzTargetEnum {
    Awswaf20150824CreateRegexPatternSet = "AWSWAF_20150824.CreateRegexPatternSet"
}


export class CreateRegexPatternSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRegexPatternSetXAmzTargetEnum;
}


export class CreateRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRegexPatternSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRegexPatternSetRequest;
}


export class CreateRegexPatternSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRegexPatternSetResponse?: shared.CreateRegexPatternSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafDisallowedNameException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
