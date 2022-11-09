import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteProtectionGroupXAmzTargetEnum {
    AwsShield20160616DeleteProtectionGroup = "AWSShield_20160616.DeleteProtectionGroup"
}


export class DeleteProtectionGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteProtectionGroupXAmzTargetEnum;
}


export class DeleteProtectionGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteProtectionGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteProtectionGroupRequest;
}


export class DeleteProtectionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProtectionGroupResponse?: Map<string, any>;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
