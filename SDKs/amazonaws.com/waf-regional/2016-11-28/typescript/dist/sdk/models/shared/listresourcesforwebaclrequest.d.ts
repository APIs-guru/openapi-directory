import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class ListResourcesForWebAclRequest extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    webAclId: string;
}
