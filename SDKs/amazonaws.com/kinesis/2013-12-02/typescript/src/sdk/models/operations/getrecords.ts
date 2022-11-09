import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRecordsXAmzTargetEnum {
    Kinesis20131202GetRecords = "Kinesis_20131202.GetRecords"
}


export class GetRecordsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRecordsXAmzTargetEnum;
}


export class GetRecordsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRecordsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRecordsInput;
}


export class GetRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  expiredIteratorException?: any;

  @Metadata()
  getRecordsOutput?: shared.GetRecordsOutput;

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
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
