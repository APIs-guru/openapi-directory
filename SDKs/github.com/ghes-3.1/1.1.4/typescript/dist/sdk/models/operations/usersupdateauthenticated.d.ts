import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUpdateAuthenticatedRequestBody extends SpeakeasyBase {
    bio?: string;
    blog?: string;
    company?: string;
    email?: string;
    hireable?: boolean;
    location?: string;
    name?: string;
    twitterUsername?: string;
}
export declare class UsersUpdateAuthenticatedRequest extends SpeakeasyBase {
    request?: UsersUpdateAuthenticatedRequestBody;
}
export declare class UsersUpdateAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    privateUser?: shared.PrivateUser;
    validationError?: shared.ValidationError;
}
