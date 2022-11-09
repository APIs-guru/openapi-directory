import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901DeleteLifecyclePolicy = "MediaStore_20170901.DeleteLifecyclePolicy"
}


export class DeleteLifecyclePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}


export class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteLifecyclePolicyInput;
}


export class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteLifecyclePolicyOutput?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
