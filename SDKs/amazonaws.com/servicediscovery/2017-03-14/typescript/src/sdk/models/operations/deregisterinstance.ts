import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314DeregisterInstance = "Route53AutoNaming_v20170314.DeregisterInstance"
}


export class DeregisterInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterInstanceXAmzTargetEnum;
}


export class DeregisterInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterInstanceRequest;
}


export class DeregisterInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterInstanceResponse?: shared.DeregisterInstanceResponse;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  instanceNotFound?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  serviceNotFound?: any;

  @Metadata()
  statusCode: number;
}
