import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIntegrations } from "./resourceintegrations";
/**
 *  The information about the resource.
**/
export declare class Resource extends SpeakeasyBase {
    arn?: string;
    associationTime?: Date;
    integrations?: ResourceIntegrations;
    name?: string;
}
