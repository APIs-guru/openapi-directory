import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetShardIteratorXAmzTargetEnum {
    DynamoDbStreams20120810GetShardIterator = "DynamoDBStreams_20120810.GetShardIterator"
}


export class GetShardIteratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetShardIteratorXAmzTargetEnum;
}


export class GetShardIteratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetShardIteratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetShardIteratorInput;
}


export class GetShardIteratorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getShardIteratorOutput?: shared.GetShardIteratorOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  trimmedDataAccessException?: any;
}
