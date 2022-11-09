import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateDelegateFromResourceXAmzTargetEnum {
    WorkMailServiceDisassociateDelegateFromResource = "WorkMailService.DisassociateDelegateFromResource"
}


export class DisassociateDelegateFromResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateDelegateFromResourceXAmzTargetEnum;
}


export class DisassociateDelegateFromResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateDelegateFromResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateDelegateFromResourceRequest;
}


export class DisassociateDelegateFromResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateDelegateFromResourceResponse?: Map<string, any>;

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
