import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryHostedPropertyValuePathParams;
}
export declare class DeleteRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
