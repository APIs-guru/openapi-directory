import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartOnDemandAppReplicationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024StartOnDemandAppReplication = "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication"
}


export class StartOnDemandAppReplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartOnDemandAppReplicationXAmzTargetEnum;
}


export class StartOnDemandAppReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartOnDemandAppReplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartOnDemandAppReplicationRequest;
}


export class StartOnDemandAppReplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalError?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  missingRequiredParameterException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  startOnDemandAppReplicationResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedOperationException?: any;
}
