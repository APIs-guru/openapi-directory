import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateInstanceCustomHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateInstanceCustomHealthStatus = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
}


export class UpdateInstanceCustomHealthStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateInstanceCustomHealthStatusXAmzTargetEnum;
}


export class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateInstanceCustomHealthStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateInstanceCustomHealthStatusRequest;
}


export class UpdateInstanceCustomHealthStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customHealthNotFound?: any;

  @SpeakeasyMetadata()
  instanceNotFound?: any;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  serviceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
