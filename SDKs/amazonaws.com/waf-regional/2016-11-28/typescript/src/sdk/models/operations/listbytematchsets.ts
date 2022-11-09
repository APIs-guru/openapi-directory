import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListByteMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListByteMatchSets = "AWSWAF_Regional_20161128.ListByteMatchSets"
}


export class ListByteMatchSetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListByteMatchSetsXAmzTargetEnum;
}


export class ListByteMatchSetsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListByteMatchSetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListByteMatchSetsRequest;
}


export class ListByteMatchSetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listByteMatchSetsResponse?: shared.ListByteMatchSetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;
}
