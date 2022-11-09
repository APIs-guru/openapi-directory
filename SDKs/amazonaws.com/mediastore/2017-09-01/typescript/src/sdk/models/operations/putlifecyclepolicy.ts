import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901PutLifecyclePolicy = "MediaStore_20170901.PutLifecyclePolicy"
}


export class PutLifecyclePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLifecyclePolicyXAmzTargetEnum;
}


export class PutLifecyclePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutLifecyclePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutLifecyclePolicyInput;
}


export class PutLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  putLifecyclePolicyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
