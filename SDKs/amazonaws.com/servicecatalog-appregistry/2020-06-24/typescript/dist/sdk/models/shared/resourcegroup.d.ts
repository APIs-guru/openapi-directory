import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupStateEnum } from "./resourcegroupstateenum";
/**
 * The information about the resource group integration.
**/
export declare class ResourceGroup extends SpeakeasyBase {
    arn?: string;
    errorMessage?: string;
    state?: ResourceGroupStateEnum;
}
