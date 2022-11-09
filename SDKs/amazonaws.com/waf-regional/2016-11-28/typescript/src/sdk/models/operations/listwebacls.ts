import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListWebAcLsXAmzTargetEnum {
    AwswafRegional20161128ListWebAcLs = "AWSWAF_Regional_20161128.ListWebACLs"
}


export class ListWebAcLsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListWebAcLsXAmzTargetEnum;
}


export class ListWebAcLsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListWebAcLsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListWebAcLsRequest;
}


export class ListWebAcLsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWebAcLsResponse?: shared.ListWebAcLsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;
}
