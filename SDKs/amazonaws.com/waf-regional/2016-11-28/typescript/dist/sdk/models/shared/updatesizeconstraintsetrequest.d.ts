import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SizeConstraintSetUpdate } from "./sizeconstraintsetupdate";
export declare class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
    changeToken: string;
    sizeConstraintSetId: string;
    updates: SizeConstraintSetUpdate[];
}
