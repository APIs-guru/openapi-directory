import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SyncResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}


export class SyncResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceType" })
  resourceType: SyncResourceResourceTypeEnum;
}


export class SyncResourceHeaders extends SpeakeasyBase {
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


export class SyncResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SyncResourcePathParams;

  @Metadata()
  headers: SyncResourceHeaders;
}


export class SyncResourceResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncResourceResponse?: shared.SyncResourceResponse;
}
