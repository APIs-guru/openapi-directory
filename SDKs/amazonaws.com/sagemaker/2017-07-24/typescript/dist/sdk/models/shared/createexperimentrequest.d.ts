import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateExperimentRequest extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    experimentName: string;
    tags?: Tag[];
}
