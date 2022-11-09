import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateAliasXAmzTargetEnum {
    WorkMailServiceCreateAlias = "WorkMailService.CreateAlias"
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
    contentType: string;
    createAliasResponse?: Map<string, any>;
    emailAddressInUseException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    mailDomainNotFoundException?: any;
    mailDomainStateException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
