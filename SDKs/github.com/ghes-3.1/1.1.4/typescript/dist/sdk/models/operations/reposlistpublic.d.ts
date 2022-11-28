import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReposListPublicVisibilityEnum {
    All = "all",
    Public = "public"
}
export declare class ReposListPublicQueryParams extends SpeakeasyBase {
    since?: number;
    visibility?: ReposListPublicVisibilityEnum;
}
export declare class ReposListPublicRequest extends SpeakeasyBase {
    queryParams: ReposListPublicQueryParams;
}
export declare class ReposListPublicResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
    validationError?: shared.ValidationError;
}
