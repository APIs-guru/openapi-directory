import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyId" })
  accessPolicyId: string;
}


export class DeleteAccessPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clientToken" })
  clientToken?: string;
}


export class DeleteAccessPolicyHeaders extends SpeakeasyBase {
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
}


export class DeleteAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAccessPolicyPathParams;

  @Metadata()
  queryParams: DeleteAccessPolicyQueryParams;

  @Metadata()
  headers: DeleteAccessPolicyHeaders;
}


export class DeleteAccessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAccessPolicyResponse?: Map<string, any>;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
