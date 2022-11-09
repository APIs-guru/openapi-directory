import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteMetricPolicyXAmzTargetEnum {
    MediaStore20170901DeleteMetricPolicy = "MediaStore_20170901.DeleteMetricPolicy"
}


export class DeleteMetricPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteMetricPolicyXAmzTargetEnum;
}


export class DeleteMetricPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteMetricPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteMetricPolicyInput;
}


export class DeleteMetricPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteMetricPolicyOutput?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
