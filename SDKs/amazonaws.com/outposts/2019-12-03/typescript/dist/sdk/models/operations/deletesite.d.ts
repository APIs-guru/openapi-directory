import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteSitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class DeleteSiteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSiteRequest extends SpeakeasyBase {
    pathParams: DeleteSitePathParams;
    headers: DeleteSiteHeaders;
}
export declare class DeleteSiteResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteSiteOutput?: Map<string, any>;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    validationException?: any;
}
