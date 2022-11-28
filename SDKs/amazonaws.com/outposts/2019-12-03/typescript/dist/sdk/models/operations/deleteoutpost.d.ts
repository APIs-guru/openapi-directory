import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteOutpostPathParams extends SpeakeasyBase {
    outpostId: string;
}
export declare class DeleteOutpostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteOutpostRequest extends SpeakeasyBase {
    pathParams: DeleteOutpostPathParams;
    headers: DeleteOutpostHeaders;
}
export declare class DeleteOutpostResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteOutpostOutput?: Map<string, any>;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    validationException?: any;
}
