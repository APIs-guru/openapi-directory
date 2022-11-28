import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCommitHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    commit: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteCommitHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: DeleteCommitHostedPropertyValuePathParams;
}
export declare class DeleteCommitHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
