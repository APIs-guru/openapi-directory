import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCommitHostedPropertyValuePathParams extends SpeakeasyBase {
    appKey: string;
    commit: string;
    propertyName: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetCommitHostedPropertyValueRequest extends SpeakeasyBase {
    pathParams: GetCommitHostedPropertyValuePathParams;
}
export declare class GetCommitHostedPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
