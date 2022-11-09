import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TerminateProvisionedProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    ignoreErrors?: boolean;
    provisionedProductId?: string;
    provisionedProductName?: string;
    retainPhysicalResources?: boolean;
    terminateToken: string;
}
