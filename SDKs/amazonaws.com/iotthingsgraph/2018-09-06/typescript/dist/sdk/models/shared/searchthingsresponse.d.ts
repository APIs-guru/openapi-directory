import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Thing } from "./thing";
export declare class SearchThingsResponse extends SpeakeasyBase {
    nextToken?: string;
    things?: Thing[];
}
