import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutContainerPolicyXAmzTargetEnum {
    MediaStore20170901PutContainerPolicy = "MediaStore_20170901.PutContainerPolicy"
}


export class PutContainerPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutContainerPolicyXAmzTargetEnum;
}


export class PutContainerPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutContainerPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutContainerPolicyInput;
}


export class PutContainerPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  putContainerPolicyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
