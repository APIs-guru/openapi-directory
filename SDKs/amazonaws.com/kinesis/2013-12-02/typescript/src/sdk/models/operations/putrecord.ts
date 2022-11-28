import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutRecordXAmzTargetEnum {
    Kinesis20131202PutRecord = "Kinesis_20131202.PutRecord"
}


export class PutRecordHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRecordXAmzTargetEnum;
}


export class PutRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutRecordHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutRecordInput;
}


export class PutRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  kmsAccessDeniedException?: any;

  @SpeakeasyMetadata()
  kmsDisabledException?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateException?: any;

  @SpeakeasyMetadata()
  kmsNotFoundException?: any;

  @SpeakeasyMetadata()
  kmsOptInRequired?: any;

  @SpeakeasyMetadata()
  kmsThrottlingException?: any;

  @SpeakeasyMetadata()
  provisionedThroughputExceededException?: any;

  @SpeakeasyMetadata()
  putRecordOutput?: shared.PutRecordOutput;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
