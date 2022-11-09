import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSqlInjectionMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListSqlInjectionMatchSets = "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets"
}


export class ListSqlInjectionMatchSetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSqlInjectionMatchSetsXAmzTargetEnum;
}


export class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListSqlInjectionMatchSetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSqlInjectionMatchSetsRequest;
}


export class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSqlInjectionMatchSetsResponse?: shared.ListSqlInjectionMatchSetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;
}
