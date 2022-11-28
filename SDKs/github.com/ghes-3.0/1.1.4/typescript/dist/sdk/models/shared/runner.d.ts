import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RunnerLabelsTypeEnum {
    ReadOnly = "read-only",
    Custom = "custom"
}
export declare class RunnerLabels extends SpeakeasyBase {
    id?: number;
    name?: string;
    type?: RunnerLabelsTypeEnum;
}
/**
 * A self hosted runner
**/
export declare class Runner extends SpeakeasyBase {
    busy: boolean;
    id: number;
    labels: RunnerLabels[];
    name: string;
    os: string;
    status: string;
}
