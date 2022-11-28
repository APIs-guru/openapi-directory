import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class ListResourcesForWebAclRequest extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    webAclId: string;
}
