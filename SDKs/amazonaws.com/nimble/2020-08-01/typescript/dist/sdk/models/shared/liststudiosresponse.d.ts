import { SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";
export declare class ListStudiosResponse extends SpeakeasyBase {
    nextToken?: string;
    studios?: Studio[];
}
