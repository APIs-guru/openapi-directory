import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateWebAclMigrationStackXAmzTargetEnum {
    AwswafRegional20161128CreateWebAclMigrationStack = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"
}


export class CreateWebAclMigrationStackHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWebAclMigrationStackXAmzTargetEnum;
}


export class CreateWebAclMigrationStackRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWebAclMigrationStackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateWebAclMigrationStackRequest;
}


export class CreateWebAclMigrationStackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createWebAclMigrationStackResponse?: shared.CreateWebAclMigrationStackResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafEntityMigrationException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidOperationException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
