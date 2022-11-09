import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterManagedInstanceXAmzTargetEnum {
    AmazonSsmDeregisterManagedInstance = "AmazonSSM.DeregisterManagedInstance"
}


export class DeregisterManagedInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterManagedInstanceXAmzTargetEnum;
}


export class DeregisterManagedInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterManagedInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterManagedInstanceRequest;
}


export class DeregisterManagedInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterManagedInstanceResult?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  statusCode: number;
}
