import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchTablesByLfTagsXAmzTargetEnum {
    AwsLakeFormationSearchTablesByLfTags = "AWSLakeFormation.SearchTablesByLFTags"
}


export class SearchTablesByLfTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchTablesByLfTagsXAmzTargetEnum;
}


export class SearchTablesByLfTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchTablesByLfTagsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SearchTablesByLfTagsRequest;
}


export class SearchTablesByLfTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  glueEncryptionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  searchTablesByLfTagsResponse?: shared.SearchTablesByLfTagsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
