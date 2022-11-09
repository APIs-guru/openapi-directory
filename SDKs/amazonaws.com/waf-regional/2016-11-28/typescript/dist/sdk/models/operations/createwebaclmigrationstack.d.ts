import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateWebAclMigrationStackXAmzTargetEnum {
    AwswafRegional20161128CreateWebAclMigrationStack = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"
}
export declare class CreateWebAclMigrationStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebAclMigrationStackXAmzTargetEnum;
}
export declare class CreateWebAclMigrationStackRequest extends SpeakeasyBase {
    headers: CreateWebAclMigrationStackHeaders;
    request: shared.CreateWebAclMigrationStackRequest;
}
export declare class CreateWebAclMigrationStackResponse extends SpeakeasyBase {
    contentType: string;
    createWebAclMigrationStackResponse?: shared.CreateWebAclMigrationStackResponse;
    statusCode: number;
    wafEntityMigrationException?: any;
    wafInternalErrorException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
