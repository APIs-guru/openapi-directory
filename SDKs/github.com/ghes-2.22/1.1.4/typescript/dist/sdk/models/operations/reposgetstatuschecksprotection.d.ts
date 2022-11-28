import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetStatusChecksProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetStatusChecksProtectionRequest extends SpeakeasyBase {
    pathParams: ReposGetStatusChecksProtectionPathParams;
}
export declare class ReposGetStatusChecksProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    statusCheckPolicy?: shared.StatusCheckPolicy;
}
