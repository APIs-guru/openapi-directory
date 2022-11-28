import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class CreateResourceRequest extends SpeakeasyBase {
    name: string;
    organizationId: string;
    type: ResourceTypeEnum;
}
