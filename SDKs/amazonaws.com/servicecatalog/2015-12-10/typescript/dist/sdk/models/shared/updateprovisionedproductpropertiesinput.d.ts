import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateProvisionedProductPropertiesInput extends SpeakeasyBase {
    acceptLanguage?: string;
    idempotencyToken: string;
    provisionedProductId: string;
    provisionedProductProperties: Map<string, string>;
}
