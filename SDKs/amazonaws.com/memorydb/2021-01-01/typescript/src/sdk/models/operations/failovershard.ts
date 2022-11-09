import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum FailoverShardXAmzTargetEnum {
    AmazonMemoryDbFailoverShard = "AmazonMemoryDB.FailoverShard"
}


export class FailoverShardHeaders extends SpeakeasyBase {
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
  xAmzTarget: FailoverShardXAmzTargetEnum;
}


export class FailoverShardRequest extends SpeakeasyBase {
  @Metadata()
  headers: FailoverShardHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FailoverShardRequest;
}


export class FailoverShardResponse extends SpeakeasyBase {
  @Metadata()
  apiCallRateForCustomerExceededFault?: any;

  @Metadata()
  clusterNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  failoverShardResponse?: shared.FailoverShardResponse;

  @Metadata()
  invalidClusterStateFault?: any;

  @Metadata()
  invalidKmsKeyFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  shardNotFoundFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testFailoverNotAvailableFault?: any;
}
