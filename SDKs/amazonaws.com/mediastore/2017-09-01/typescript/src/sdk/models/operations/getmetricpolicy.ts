import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMetricPolicyXAmzTargetEnum {
    MediaStore20170901GetMetricPolicy = "MediaStore_20170901.GetMetricPolicy"
}


export class GetMetricPolicyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetMetricPolicyXAmzTargetEnum;
}


export class GetMetricPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetMetricPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetMetricPolicyInput;
}


export class GetMetricPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerInUseException?: any;

  @SpeakeasyMetadata()
  containerNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMetricPolicyOutput?: shared.GetMetricPolicyOutput;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  policyNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
