import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetServiceXAmzTargetEnum {
    Route53AutoNamingV20170314GetService = "Route53AutoNaming_v20170314.GetService"
}


export class GetServiceHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetServiceXAmzTargetEnum;
}


export class GetServiceRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetServiceRequest;
}


export class GetServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServiceResponse?: shared.GetServiceResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  serviceNotFound?: any;

  @Metadata()
  statusCode: number;
}
