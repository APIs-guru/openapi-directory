import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { ContextSource } from "./contextsource";
export declare class DescribeContextResponse extends SpeakeasyBase {
    contextArn?: string;
    contextName?: string;
    contextType?: string;
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    properties?: Map<string, string>;
    source?: ContextSource;
}
