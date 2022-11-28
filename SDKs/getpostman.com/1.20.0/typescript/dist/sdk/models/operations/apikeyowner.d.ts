import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiKeyOwner200ApplicationJsonOperations extends SpeakeasyBase {
    limit?: number;
    name?: string;
    overage?: number;
    usage?: number;
}
export declare class ApiKeyOwner200ApplicationJsonUser extends SpeakeasyBase {
    avatar?: string;
    email?: string;
    fullName?: string;
    id?: string;
    isPublic?: boolean;
    username?: string;
}
export declare class ApiKeyOwner200ApplicationJson extends SpeakeasyBase {
    operations?: ApiKeyOwner200ApplicationJsonOperations[];
    user?: ApiKeyOwner200ApplicationJsonUser;
}
export declare class ApiKeyOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiKeyOwner200ApplicationJsonObject?: ApiKeyOwner200ApplicationJson;
}
