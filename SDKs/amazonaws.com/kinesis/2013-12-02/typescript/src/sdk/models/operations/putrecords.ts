import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRecordsXAmzTargetEnum {
    Kinesis20131202PutRecords = "Kinesis_20131202.PutRecords"
}


export class PutRecordsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRecordsXAmzTargetEnum;
}


export class PutRecordsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRecordsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRecordsInput;
}


export class PutRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  kmsAccessDeniedException?: any;

  @Metadata()
  kmsDisabledException?: any;

  @Metadata()
  kmsInvalidStateException?: any;

  @Metadata()
  kmsNotFoundException?: any;

  @Metadata()
  kmsOptInRequired?: any;

  @Metadata()
  kmsThrottlingException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  putRecordsOutput?: shared.PutRecordsOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
