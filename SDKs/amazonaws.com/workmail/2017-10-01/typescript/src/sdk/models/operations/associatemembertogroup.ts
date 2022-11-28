import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AssociateMemberToGroupXAmzTargetEnum {
    WorkMailServiceAssociateMemberToGroup = "WorkMailService.AssociateMemberToGroup"
}


export class AssociateMemberToGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateMemberToGroupXAmzTargetEnum;
}


export class AssociateMemberToGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateMemberToGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssociateMemberToGroupRequest;
}


export class AssociateMemberToGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateMemberToGroupResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryServiceAuthenticationFailedException?: any;

  @SpeakeasyMetadata()
  directoryUnavailableException?: any;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  entityStateException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  organizationNotFoundException?: any;

  @SpeakeasyMetadata()
  organizationStateException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
