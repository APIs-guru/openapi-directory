import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListRegexPatternSetsXAmzTargetEnum {
    Awswaf20150824ListRegexPatternSets = "AWSWAF_20150824.ListRegexPatternSets"
}


export class ListRegexPatternSetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRegexPatternSetsXAmzTargetEnum;
}


export class ListRegexPatternSetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListRegexPatternSetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRegexPatternSetsRequest;
}


export class ListRegexPatternSetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRegexPatternSetsResponse?: shared.ListRegexPatternSetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;
}
