import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
export declare class SectionResponse extends SpeakeasyBase {
    createdAt?: Date;
    gid?: string;
    name?: string;
    project?: ProjectCompact;
    projects?: ProjectCompact[];
    resourceType?: string;
}
