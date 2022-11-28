import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchClickwrapsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PatchClickwrapsIdRequestBodyUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum PatchClickwrapsIdRequestBodyUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
export declare enum PatchClickwrapsIdRequestBodyUseWithUsersEnum {
    None = "none",
    Require = "require"
}
export declare class PatchClickwrapsIdRequestBody extends SpeakeasyBase {
    body?: string;
    name?: string;
    useWithBundles?: PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
    useWithInboxes?: PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
    useWithUsers?: PatchClickwrapsIdRequestBodyUseWithUsersEnum;
}
export declare class PatchClickwrapsIdRequest extends SpeakeasyBase {
    pathParams: PatchClickwrapsIdPathParams;
    request?: PatchClickwrapsIdRequestBody;
}
export declare class PatchClickwrapsIdResponse extends SpeakeasyBase {
    clickwrapEntity?: shared.ClickwrapEntity;
    contentType: string;
    statusCode: number;
}
