import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class UpdateRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: UpdateRepositoryHostedPropertyValuePathParams;
}
export declare class UpdateRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
