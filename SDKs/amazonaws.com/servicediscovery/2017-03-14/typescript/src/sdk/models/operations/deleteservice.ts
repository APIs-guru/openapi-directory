import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteServiceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteService = "Route53AutoNaming_v20170314.DeleteService"
}


export class DeleteServiceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteServiceXAmzTargetEnum;
}


export class DeleteServiceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteServiceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteServiceRequest;
}


export class DeleteServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteServiceResponse?: Map<string, any>;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  serviceNotFound?: any;

  @Metadata()
  statusCode: number;
}
