import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataClassificationDetails } from "./dataclassificationdetails";
import { ResourceDetails } from "./resourcedetails";
import { PartitionEnum } from "./partitionenum";


// Resource
/** 
 * A resource related to a finding.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataClassification" })
  dataClassification?: DataClassificationDetails;

  @Metadata({ data: "json, name=Details" })
  details?: ResourceDetails;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Partition" })
  partition?: PartitionEnum;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=ResourceRole" })
  resourceRole?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
