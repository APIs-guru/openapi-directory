import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateMemberFromGroupXAmzTargetEnum {
    WorkMailServiceDisassociateMemberFromGroup = "WorkMailService.DisassociateMemberFromGroup"
}


export class DisassociateMemberFromGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateMemberFromGroupXAmzTargetEnum;
}


export class DisassociateMemberFromGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateMemberFromGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateMemberFromGroupRequest;
}


export class DisassociateMemberFromGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryServiceAuthenticationFailedException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  disassociateMemberFromGroupResponse?: Map<string, any>;

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

  @Metadata()
  unsupportedOperationException?: any;
}
