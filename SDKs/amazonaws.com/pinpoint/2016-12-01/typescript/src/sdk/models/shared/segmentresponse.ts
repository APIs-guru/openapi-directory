import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentImportResource } from "./segmentimportresource";
import { SegmentGroupList } from "./segmentgrouplist";
import { SegmentTypeEnum } from "./segmenttypeenum";



// SegmentResponse
/** 
 * Provides information about the configuration, dimension, and other settings for a segment.
**/
export class SegmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: SegmentDimensions;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ImportDefinition" })
  importDefinition?: SegmentImportResource;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentGroups" })
  segmentGroups?: SegmentGroupList;

  @SpeakeasyMetadata({ data: "json, name=SegmentType" })
  segmentType: SegmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
