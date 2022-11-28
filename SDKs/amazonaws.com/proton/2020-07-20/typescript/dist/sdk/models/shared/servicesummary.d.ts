import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceStatusEnum } from "./servicestatusenum";
/**
 * A summary of the service detail data.
**/
export declare class ServiceSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    name: string;
    status: ServiceStatusEnum;
    statusMessage?: string;
    templateName: string;
}
