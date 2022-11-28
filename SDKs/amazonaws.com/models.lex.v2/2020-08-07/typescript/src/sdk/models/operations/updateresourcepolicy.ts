import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateResourcePolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" })
  resourceArn: string;
}


export class UpdateResourcePolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" })
  expectedRevisionId?: string;
}


export class UpdateResourcePolicyHeaders extends SpeakeasyBase {
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
}


export class UpdateResourcePolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;
}


export class UpdateResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateResourcePolicyPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateResourcePolicyQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateResourcePolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateResourcePolicyRequestBody;
}


export class UpdateResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateResourcePolicyResponse?: shared.UpdateResourcePolicyResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
