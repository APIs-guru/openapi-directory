import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteAliasXAmzTargetEnum {
    WorkMailServiceDeleteAlias = "WorkMailService.DeleteAlias"
}
export declare class DeleteAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAliasXAmzTargetEnum;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    headers: DeleteAliasHeaders;
    request: shared.DeleteAliasRequest;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    deleteAliasResponse?: Map<string, any>;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
