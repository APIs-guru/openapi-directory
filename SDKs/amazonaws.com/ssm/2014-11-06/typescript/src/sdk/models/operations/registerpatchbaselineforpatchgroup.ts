import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmRegisterPatchBaselineForPatchGroup = "AmazonSSM.RegisterPatchBaselineForPatchGroup"
}


export class RegisterPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterPatchBaselineForPatchGroupXAmzTargetEnum;
}


export class RegisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterPatchBaselineForPatchGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterPatchBaselineForPatchGroupRequest;
}


export class RegisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidResourceId?: any;

  @Metadata()
  registerPatchBaselineForPatchGroupResult?: shared.RegisterPatchBaselineForPatchGroupResult;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
