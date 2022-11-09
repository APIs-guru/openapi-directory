import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAccessControlEffectXAmzTargetEnum {
    WorkMailServiceGetAccessControlEffect = "WorkMailService.GetAccessControlEffect"
}


export class GetAccessControlEffectHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAccessControlEffectXAmzTargetEnum;
}


export class GetAccessControlEffectRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAccessControlEffectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAccessControlEffectRequest;
}


export class GetAccessControlEffectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  getAccessControlEffectResponse?: shared.GetAccessControlEffectResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;
}
