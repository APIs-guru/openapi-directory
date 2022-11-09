import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DecreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202DecreaseStreamRetentionPeriod = "Kinesis_20131202.DecreaseStreamRetentionPeriod"
}


export class DecreaseStreamRetentionPeriodHeaders extends SpeakeasyBase {
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
  xAmzTarget: DecreaseStreamRetentionPeriodXAmzTargetEnum;
}


export class DecreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
  @Metadata()
  headers: DecreaseStreamRetentionPeriodHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DecreaseStreamRetentionPeriodInput;
}


export class DecreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
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
