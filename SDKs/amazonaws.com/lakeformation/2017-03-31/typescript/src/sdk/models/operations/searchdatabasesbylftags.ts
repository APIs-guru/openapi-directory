import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchDatabasesByLfTagsXAmzTargetEnum {
    AwsLakeFormationSearchDatabasesByLfTags = "AWSLakeFormation.SearchDatabasesByLFTags"
}


export class SearchDatabasesByLfTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchDatabasesByLfTagsXAmzTargetEnum;
}


export class SearchDatabasesByLfTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchDatabasesByLfTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchDatabasesByLfTagsRequest;
}


export class SearchDatabasesByLfTagsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  glueEncryptionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  searchDatabasesByLfTagsResponse?: shared.SearchDatabasesByLfTagsResponse;

  @Metadata()
  statusCode: number;
}
