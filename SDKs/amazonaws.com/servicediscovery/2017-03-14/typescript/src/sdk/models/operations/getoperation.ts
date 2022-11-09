import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOperationXAmzTargetEnum {
    Route53AutoNamingV20170314GetOperation = "Route53AutoNaming_v20170314.GetOperation"
}


export class GetOperationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOperationXAmzTargetEnum;
}


export class GetOperationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOperationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOperationRequest;
}


export class GetOperationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOperationResponse?: shared.GetOperationResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationNotFound?: any;

  @Metadata()
  statusCode: number;
}
