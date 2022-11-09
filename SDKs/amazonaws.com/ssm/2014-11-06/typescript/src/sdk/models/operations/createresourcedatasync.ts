import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateResourceDataSyncXAmzTargetEnum {
    AmazonSsmCreateResourceDataSync = "AmazonSSM.CreateResourceDataSync"
}


export class CreateResourceDataSyncHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateResourceDataSyncXAmzTargetEnum;
}


export class CreateResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResourceDataSyncHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateResourceDataSyncRequest;
}


export class CreateResourceDataSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createResourceDataSyncResult?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceDataSyncAlreadyExistsException?: any;

  @Metadata()
  resourceDataSyncCountExceededException?: any;

  @Metadata()
  resourceDataSyncInvalidConfigurationException?: any;

  @Metadata()
  statusCode: number;
}
