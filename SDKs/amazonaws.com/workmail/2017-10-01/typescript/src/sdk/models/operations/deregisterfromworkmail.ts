import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterFromWorkMailXAmzTargetEnum {
    WorkMailServiceDeregisterFromWorkMail = "WorkMailService.DeregisterFromWorkMail"
}


export class DeregisterFromWorkMailHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterFromWorkMailXAmzTargetEnum;
}


export class DeregisterFromWorkMailRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterFromWorkMailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterFromWorkMailRequest;
}


export class DeregisterFromWorkMailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterFromWorkMailResponse?: Map<string, any>;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;
}
