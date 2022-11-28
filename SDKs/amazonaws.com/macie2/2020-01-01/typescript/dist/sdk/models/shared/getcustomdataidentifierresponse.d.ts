import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomDataIdentifierResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deleted?: boolean;
    description?: string;
    id?: string;
    ignoreWords?: string[];
    keywords?: string[];
    maximumMatchDistance?: number;
    name?: string;
    regex?: string;
    tags?: Map<string, string>;
}
