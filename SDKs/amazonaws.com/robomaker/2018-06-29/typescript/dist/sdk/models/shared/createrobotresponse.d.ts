import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
export declare class CreateRobotResponse extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn?: string;
    createdAt?: Date;
    greengrassGroupId?: string;
    name?: string;
    tags?: Map<string, string>;
}
