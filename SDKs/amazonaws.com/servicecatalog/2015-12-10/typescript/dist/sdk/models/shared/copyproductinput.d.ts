import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CopyOptionEnum } from "./copyoptionenum";
export declare class CopyProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    copyOptions?: CopyOptionEnum[];
    idempotencyToken: string;
    sourceProductArn: string;
    sourceProvisioningArtifactIdentifiers?: Map<string, string>[];
    targetProductId?: string;
    targetProductName?: string;
}
