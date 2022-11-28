import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifiersResult } from "./customdataidentifiersresult";
import { SensitiveDataResult } from "./sensitivedataresult";
import { ClassificationStatus } from "./classificationstatus";
/**
 * Details about the sensitive data that was detected on the resource.
**/
export declare class ClassificationResult extends SpeakeasyBase {
    additionalOccurrences?: boolean;
    customDataIdentifiers?: CustomDataIdentifiersResult;
    mimeType?: string;
    sensitiveData?: SensitiveDataResult[];
    sizeClassified?: number;
    status?: ClassificationStatus;
}
