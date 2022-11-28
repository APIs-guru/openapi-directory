import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePullRequestHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    propertyName: string;
    pullrequestId: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeletePullRequestHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: DeletePullRequestHostedPropertyValuePathParams;
}
export declare class DeletePullRequestHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
