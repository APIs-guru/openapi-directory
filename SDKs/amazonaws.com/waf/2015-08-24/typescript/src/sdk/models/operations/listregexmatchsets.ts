import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListRegexMatchSetsXAmzTargetEnum {
    Awswaf20150824ListRegexMatchSets = "AWSWAF_20150824.ListRegexMatchSets"
}


export class ListRegexMatchSetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRegexMatchSetsXAmzTargetEnum;
}


export class ListRegexMatchSetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListRegexMatchSetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRegexMatchSetsRequest;
}


export class ListRegexMatchSetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRegexMatchSetsResponse?: shared.ListRegexMatchSetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;
}
