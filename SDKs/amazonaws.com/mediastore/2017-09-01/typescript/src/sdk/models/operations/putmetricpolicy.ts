import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutMetricPolicyXAmzTargetEnum {
    MediaStore20170901PutMetricPolicy = "MediaStore_20170901.PutMetricPolicy"
}


export class PutMetricPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutMetricPolicyXAmzTargetEnum;
}


export class PutMetricPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutMetricPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutMetricPolicyInput;
}


export class PutMetricPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  putMetricPolicyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
