import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeItem } from "./instancetypeitem";
export declare class GetOutpostInstanceTypesOutput extends SpeakeasyBase {
    instanceTypes?: InstanceTypeItem[];
    nextToken?: string;
    outpostArn?: string;
    outpostId?: string;
}
