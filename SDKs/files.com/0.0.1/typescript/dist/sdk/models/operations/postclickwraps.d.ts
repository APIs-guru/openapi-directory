import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostClickwrapsRequestBodyUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum PostClickwrapsRequestBodyUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum PostClickwrapsRequestBodyUseWithUsersEnum {
    None = "none",
    Require = "require"
}
export declare class PostClickwrapsRequestBody extends SpeakeasyBase {
    body?: string;
    name?: string;
    useWithBundles?: PostClickwrapsRequestBodyUseWithBundlesEnum;
    useWithInboxes?: PostClickwrapsRequestBodyUseWithInboxesEnum;
    useWithUsers?: PostClickwrapsRequestBodyUseWithUsersEnum;
}
export declare class PostClickwrapsRequest extends SpeakeasyBase {
    request?: PostClickwrapsRequestBody;
}
export declare class PostClickwrapsResponse extends SpeakeasyBase {
    clickwrapEntity?: shared.ClickwrapEntity;
    contentType: string;
    statusCode: number;
}
