import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAliasXAmzTargetEnum {
    TrentServiceCreateAlias = "TrentService.CreateAlias"
}
export declare class CreateAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAliasXAmzTargetEnum;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    headers: CreateAliasHeaders;
    request: shared.CreateAliasRequest;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    dependencyTimeoutException?: any;
    invalidAliasNameException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
