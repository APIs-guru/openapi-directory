import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateResourceDataSyncXAmzTargetEnum {
    AmazonSsmCreateResourceDataSync = "AmazonSSM.CreateResourceDataSync"
}


export class CreateResourceDataSyncHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateResourceDataSyncXAmzTargetEnum;
}


export class CreateResourceDataSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateResourceDataSyncHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateResourceDataSyncRequest;
}


export class CreateResourceDataSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createResourceDataSyncResult?: Map<string, any>;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  resourceDataSyncAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceDataSyncCountExceededException?: any;

  @SpeakeasyMetadata()
  resourceDataSyncInvalidConfigurationException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
