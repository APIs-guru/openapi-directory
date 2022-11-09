import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateResourceDataSyncXAmzTargetEnum {
    AmazonSsmUpdateResourceDataSync = "AmazonSSM.UpdateResourceDataSync"
}


export class UpdateResourceDataSyncHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateResourceDataSyncXAmzTargetEnum;
}


export class UpdateResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateResourceDataSyncHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateResourceDataSyncRequest;
}


export class UpdateResourceDataSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceDataSyncConflictException?: any;

  @Metadata()
  resourceDataSyncInvalidConfigurationException?: any;

  @Metadata()
  resourceDataSyncNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateResourceDataSyncResult?: Map<string, any>;
}
