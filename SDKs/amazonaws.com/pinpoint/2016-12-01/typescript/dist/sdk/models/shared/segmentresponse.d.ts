import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentImportResource } from "./segmentimportresource";
import { SegmentGroupList } from "./segmentgrouplist";
import { SegmentTypeEnum } from "./segmenttypeenum";
/**
 * Provides information about the configuration, dimension, and other settings for a segment.
**/
export declare class SegmentResponse extends SpeakeasyBase {
    applicationId: string;
    arn: string;
    creationDate: string;
    dimensions?: SegmentDimensions;
    id: string;
    importDefinition?: SegmentImportResource;
    lastModifiedDate?: string;
    name?: string;
    segmentGroups?: SegmentGroupList;
    segmentType: SegmentTypeEnum;
    version?: number;
    tags?: Map<string, string>;
}
