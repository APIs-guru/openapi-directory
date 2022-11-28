import { SpeakeasyBase } from "../../../internal/utils";
import { OpsEntity } from "./opsentity";
export declare class GetOpsSummaryResult extends SpeakeasyBase {
    entities?: OpsEntity[];
    nextToken?: string;
}
