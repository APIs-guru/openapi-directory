import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMetricPolicyXAmzTargetEnum {
    MediaStore20170901GetMetricPolicy = "MediaStore_20170901.GetMetricPolicy"
}


export class GetMetricPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetMetricPolicyXAmzTargetEnum;
}


export class GetMetricPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetMetricPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetMetricPolicyInput;
}


export class GetMetricPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getMetricPolicyOutput?: shared.GetMetricPolicyOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
