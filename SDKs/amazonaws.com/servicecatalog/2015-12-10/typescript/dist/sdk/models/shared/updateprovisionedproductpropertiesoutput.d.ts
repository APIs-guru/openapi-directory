import { SpeakeasyBase } from "../../../internal/utils";
import { RecordStatusEnum } from "./recordstatusenum";
export declare class UpdateProvisionedProductPropertiesOutput extends SpeakeasyBase {
    provisionedProductId?: string;
    provisionedProductProperties?: Map<string, string>;
    recordId?: string;
    status?: RecordStatusEnum;
}
