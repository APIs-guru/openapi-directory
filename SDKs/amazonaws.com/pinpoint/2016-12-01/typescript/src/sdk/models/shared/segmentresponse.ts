import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentImportResource } from "./segmentimportresource";
import { SegmentGroupList } from "./segmentgrouplist";
import { SegmentTypeEnum } from "./segmenttypeenum";


// SegmentResponse
/** 
 * Provides information about the configuration, dimension, and other settings for a segment.
**/
export class SegmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: SegmentDimensions;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=ImportDefinition" })
  importDefinition?: SegmentImportResource;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SegmentGroups" })
  segmentGroups?: SegmentGroupList;

  @Metadata({ data: "json, name=SegmentType" })
  segmentType: SegmentTypeEnum;

  @Metadata({ data: "json, name=Version" })
  version?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
