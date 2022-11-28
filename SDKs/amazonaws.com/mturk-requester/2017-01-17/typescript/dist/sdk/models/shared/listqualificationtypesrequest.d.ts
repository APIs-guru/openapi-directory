import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListQualificationTypesRequest extends SpeakeasyBase {
    maxResults?: number;
    mustBeOwnedByCaller?: boolean;
    mustBeRequestable: boolean;
    nextToken?: string;
    query?: string;
}
