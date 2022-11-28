import { SpeakeasyBase } from "../../../internal/utils";
import { OffsetInfo } from "./offsetinfo";
import { Election } from "./election";
export declare class ElectionPage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: Election[];
}
