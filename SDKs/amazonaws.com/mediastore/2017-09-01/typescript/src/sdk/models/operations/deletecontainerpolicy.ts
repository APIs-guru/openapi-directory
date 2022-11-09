import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteContainerPolicyXAmzTargetEnum {
    MediaStore20170901DeleteContainerPolicy = "MediaStore_20170901.DeleteContainerPolicy"
}


export class DeleteContainerPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteContainerPolicyXAmzTargetEnum;
}


export class DeleteContainerPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteContainerPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteContainerPolicyInput;
}


export class DeleteContainerPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteContainerPolicyOutput?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
