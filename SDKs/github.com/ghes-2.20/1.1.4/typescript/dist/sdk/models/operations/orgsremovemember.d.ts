import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsRemoveMemberPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsRemoveMemberRequest extends SpeakeasyBase {
    pathParams: OrgsRemoveMemberPathParams;
}
export declare class OrgsRemoveMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
