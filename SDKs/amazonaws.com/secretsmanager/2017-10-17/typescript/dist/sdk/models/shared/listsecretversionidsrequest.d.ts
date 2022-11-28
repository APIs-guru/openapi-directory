import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSecretVersionIdsRequest extends SpeakeasyBase {
    includeDeprecated?: boolean;
    maxResults?: number;
    nextToken?: string;
    secretId: string;
}
