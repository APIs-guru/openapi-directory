import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CodeScanningSarifsStatusProcessingStatusEnum {
    Pending = "pending",
    Complete = "complete"
}
export declare class CodeScanningSarifsStatus extends SpeakeasyBase {
    analysesUrl?: string;
    processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}
