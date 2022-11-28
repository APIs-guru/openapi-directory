import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateWebAclMigrationStackXAmzTargetEnum {
    AwswafRegional20161128CreateWebAclMigrationStack = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"
}


export class CreateWebAclMigrationStackHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWebAclMigrationStackXAmzTargetEnum;
}


export class CreateWebAclMigrationStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWebAclMigrationStackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateWebAclMigrationStackRequest;
}


export class CreateWebAclMigrationStackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWebAclMigrationStackResponse?: shared.CreateWebAclMigrationStackResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafEntityMigrationException?: any;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidOperationException?: any;

  @SpeakeasyMetadata()
  wafInvalidParameterException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;
}
