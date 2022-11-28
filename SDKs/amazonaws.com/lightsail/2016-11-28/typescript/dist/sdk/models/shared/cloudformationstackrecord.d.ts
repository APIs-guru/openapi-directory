import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationInfo } from "./destinationinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { CloudFormationStackRecordSourceInfo } from "./cloudformationstackrecordsourceinfo";
import { RecordStateEnum } from "./recordstateenum";
/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
**/
export declare class CloudFormationStackRecord extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    destinationInfo?: DestinationInfo;
    location?: ResourceLocation;
    name?: string;
    resourceType?: ResourceTypeEnum;
    sourceInfo?: CloudFormationStackRecordSourceInfo[];
    state?: RecordStateEnum;
}
