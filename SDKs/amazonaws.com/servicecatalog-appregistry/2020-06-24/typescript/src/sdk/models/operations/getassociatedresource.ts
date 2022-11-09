import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAssociatedResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}


export class GetAssociatedResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application" })
  application: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: GetAssociatedResourceResourceTypeEnum;
}


export class GetAssociatedResourceHeaders extends SpeakeasyBase {
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


export class GetAssociatedResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssociatedResourcePathParams;

  @Metadata()
  headers: GetAssociatedResourceHeaders;
}


export class GetAssociatedResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAssociatedResourceResponse?: shared.GetAssociatedResourceResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
