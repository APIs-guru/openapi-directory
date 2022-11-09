import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Domains } from "./domains";
export declare class SearchResults extends SpeakeasyBase {
    domains?: Domains[];
    nextPage?: string;
    time: string;
    total?: number;
}
