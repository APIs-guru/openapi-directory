import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
**/
export declare class Activation extends SpeakeasyBase {
    activationId?: string;
    createdDate?: Date;
    defaultInstanceName?: string;
    description?: string;
    expirationDate?: Date;
    expired?: boolean;
    iamRole?: string;
    registrationLimit?: number;
    registrationsCount?: number;
    tags?: Tag[];
}
