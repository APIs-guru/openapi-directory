import { SpeakeasyBase } from "../../../internal/utils";
import { DataClassificationDetails } from "./dataclassificationdetails";
import { ResourceDetails } from "./resourcedetails";
import { PartitionEnum } from "./partitionenum";
/**
 * A resource related to a finding.
**/
export declare class Resource extends SpeakeasyBase {
    dataClassification?: DataClassificationDetails;
    details?: ResourceDetails;
    id: string;
    partition?: PartitionEnum;
    region?: string;
    resourceRole?: string;
    tags?: Map<string, string>;
    type: string;
}
