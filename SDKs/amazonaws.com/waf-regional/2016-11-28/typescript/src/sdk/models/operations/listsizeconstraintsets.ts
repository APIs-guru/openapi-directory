import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListSizeConstraintSetsXAmzTargetEnum {
    AwswafRegional20161128ListSizeConstraintSets = "AWSWAF_Regional_20161128.ListSizeConstraintSets"
}


export class ListSizeConstraintSetsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListSizeConstraintSetsXAmzTargetEnum;
}


export class ListSizeConstraintSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListSizeConstraintSetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListSizeConstraintSetsRequest;
}


export class ListSizeConstraintSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSizeConstraintSetsResponse?: shared.ListSizeConstraintSetsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidAccountException?: any;
}
