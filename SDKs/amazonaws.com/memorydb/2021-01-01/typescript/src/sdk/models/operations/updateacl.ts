import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateAclxAmzTargetEnum {
    AmazonMemoryDbUpdateAcl = "AmazonMemoryDB.UpdateACL"
}


export class UpdateAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateAclxAmzTargetEnum;
}


export class UpdateAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateAclRequest;
}


export class UpdateAclResponse extends SpeakeasyBase {
  @Metadata()
  aclNotFoundFault?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultUserRequired?: any;

  @Metadata()
  duplicateUserNameFault?: any;

  @Metadata()
  invalidAclStateFault?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAclResponse?: shared.UpdateAclResponse;

  @Metadata()
  userNotFoundFault?: any;
}
