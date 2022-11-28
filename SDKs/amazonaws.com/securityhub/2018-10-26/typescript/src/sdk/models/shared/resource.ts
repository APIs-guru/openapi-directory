import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataClassificationDetails } from "./dataclassificationdetails";
import { ResourceDetails } from "./resourcedetails";
import { PartitionEnum } from "./partitionenum";



// Resource
/** 
 * A resource related to a finding.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataClassification" })
  dataClassification?: DataClassificationDetails;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: ResourceDetails;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Partition" })
  partition?: PartitionEnum;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceRole" })
  resourceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
