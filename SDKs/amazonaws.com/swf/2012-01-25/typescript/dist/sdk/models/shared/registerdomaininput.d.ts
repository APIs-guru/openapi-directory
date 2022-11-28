import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";
export declare class RegisterDomainInput extends SpeakeasyBase {
    description?: string;
    name: string;
    tags?: ResourceTag[];
    workflowExecutionRetentionPeriodInDays: string;
}
