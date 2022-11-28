import { SpeakeasyBase } from "../../../internal/utils";
import { ServicePipeline } from "./servicepipeline";
import { ServiceStatusEnum } from "./servicestatusenum";
/**
 * The service detail data.
**/
export declare class Service extends SpeakeasyBase {
    arn: string;
    branchName?: string;
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    name: string;
    pipeline?: ServicePipeline;
    repositoryConnectionArn?: string;
    repositoryId?: string;
    spec: string;
    status: ServiceStatusEnum;
    statusMessage?: string;
    templateName: string;
}
