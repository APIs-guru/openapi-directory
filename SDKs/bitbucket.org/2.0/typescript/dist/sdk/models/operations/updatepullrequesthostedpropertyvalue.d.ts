import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    pullrequestId: string;
    repoSlug: string;
    workspace: string;
}
export declare class UpdatePullRequestHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: UpdatePullRequestHostedPropertyValuePathParams;
}
export declare class UpdatePullRequestHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
