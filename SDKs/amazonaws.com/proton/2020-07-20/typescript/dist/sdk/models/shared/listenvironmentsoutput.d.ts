import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSummary } from "./environmentsummary";
export declare class ListEnvironmentsOutput extends SpeakeasyBase {
    environments: EnvironmentSummary[];
    nextToken?: string;
}
