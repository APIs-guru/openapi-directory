import { SpeakeasyBase } from "../../../internal/utils";
import { Hit } from "./hit";
export declare class ListReviewableHiTsResponse extends SpeakeasyBase {
    hiTs?: Hit[];
    nextToken?: string;
    numResults?: number;
}
