import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateOpsMetadataXAmzTargetEnum {
    AmazonSsmUpdateOpsMetadata = "AmazonSSM.UpdateOpsMetadata"
}


export class UpdateOpsMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateOpsMetadataXAmzTargetEnum;
}


export class UpdateOpsMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateOpsMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOpsMetadataRequest;
}


export class UpdateOpsMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsMetadataInvalidArgumentException?: any;

  @Metadata()
  opsMetadataKeyLimitExceededException?: any;

  @Metadata()
  opsMetadataNotFoundException?: any;

  @Metadata()
  opsMetadataTooManyUpdatesException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOpsMetadataResult?: shared.UpdateOpsMetadataResult;
}
