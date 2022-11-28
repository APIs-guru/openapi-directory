import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
export declare class DescribeActionResponse extends SpeakeasyBase {
    actionArn?: string;
    actionName?: string;
    actionType?: string;
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    properties?: Map<string, string>;
    source?: ActionSource;
    status?: ActionStatusEnum;
}
