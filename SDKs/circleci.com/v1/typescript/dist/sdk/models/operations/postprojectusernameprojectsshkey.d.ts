import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostProjectUsernameProjectSshKeyPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare enum PostProjectUsernameProjectSshKeyContentTypeEnum {
    ApplicationJson = "application/json"
}
export declare class PostProjectUsernameProjectSshKeyHeaders extends SpeakeasyBase {
    contentType: PostProjectUsernameProjectSshKeyContentTypeEnum;
}
export declare class PostProjectUsernameProjectSshKeyRequestBody extends SpeakeasyBase {
    hostname?: string;
    privateKey?: string;
}
export declare class PostProjectUsernameProjectSshKeyDefaultApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostProjectUsernameProjectSshKeyRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectSshKeyPathParams;
    headers: PostProjectUsernameProjectSshKeyHeaders;
    request: PostProjectUsernameProjectSshKeyRequestBody;
}
export declare class PostProjectUsernameProjectSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    postProjectUsernameProjectSshKeyDefaultApplicationJsonObject?: PostProjectUsernameProjectSshKeyDefaultApplicationJson;
    statusCode: number;
}
