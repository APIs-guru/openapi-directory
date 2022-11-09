import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateInstanceCustomHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateInstanceCustomHealthStatus = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
}


export class UpdateInstanceCustomHealthStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateInstanceCustomHealthStatusXAmzTargetEnum;
}


export class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateInstanceCustomHealthStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateInstanceCustomHealthStatusRequest;
}


export class UpdateInstanceCustomHealthStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customHealthNotFound?: any;

  @Metadata()
  instanceNotFound?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  serviceNotFound?: any;

  @Metadata()
  statusCode: number;
}
