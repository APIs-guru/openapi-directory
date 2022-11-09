import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum IncreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202IncreaseStreamRetentionPeriod = "Kinesis_20131202.IncreaseStreamRetentionPeriod"
}


export class IncreaseStreamRetentionPeriodHeaders extends SpeakeasyBase {
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
  xAmzTarget: IncreaseStreamRetentionPeriodXAmzTargetEnum;
}


export class IncreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
  @Metadata()
  headers: IncreaseStreamRetentionPeriodHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncreaseStreamRetentionPeriodInput;
}


export class IncreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
