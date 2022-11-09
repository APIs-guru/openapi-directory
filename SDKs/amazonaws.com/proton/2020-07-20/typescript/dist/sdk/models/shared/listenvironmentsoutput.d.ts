import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentSummary } from "./environmentsummary";
export declare class ListEnvironmentsOutput extends SpeakeasyBase {
    environments: EnvironmentSummary[];
    nextToken?: string;
}
