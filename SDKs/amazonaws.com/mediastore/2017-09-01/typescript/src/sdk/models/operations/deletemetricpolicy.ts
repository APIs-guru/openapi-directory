import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteMetricPolicyXAmzTargetEnum {
    MediaStore20170901DeleteMetricPolicy = "MediaStore_20170901.DeleteMetricPolicy"
}


export class DeleteMetricPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteMetricPolicyXAmzTargetEnum;
}


export class DeleteMetricPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteMetricPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteMetricPolicyInput;
}


export class DeleteMetricPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerInUseException?: any;

  @SpeakeasyMetadata()
  containerNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteMetricPolicyOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  policyNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
