import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    pullrequestId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetPullRequestHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: GetPullRequestHostedPropertyValuePathParams;
}
export declare class GetPullRequestHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
