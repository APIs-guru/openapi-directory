import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: GetRepositoryHostedPropertyValuePathParams;
}
export declare class GetRepositoryHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
