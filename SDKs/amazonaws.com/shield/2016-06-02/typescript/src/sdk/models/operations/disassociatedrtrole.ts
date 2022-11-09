import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisassociateDrtRoleXAmzTargetEnum {
    AwsShield20160616DisassociateDrtRole = "AWSShield_20160616.DisassociateDRTRole"
}


export class DisassociateDrtRoleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateDrtRoleXAmzTargetEnum;
}


export class DisassociateDrtRoleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateDrtRoleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisassociateDrtRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateDrtRoleResponse?: Map<string, any>;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  optimisticLockException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
