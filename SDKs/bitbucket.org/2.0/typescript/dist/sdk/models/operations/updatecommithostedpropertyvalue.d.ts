import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCommitHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    commit: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class UpdateCommitHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: UpdateCommitHostedPropertyValuePathParams;
}
export declare class UpdateCommitHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
